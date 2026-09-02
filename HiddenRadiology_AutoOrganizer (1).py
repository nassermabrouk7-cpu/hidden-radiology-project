#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Hidden Radiology - مُنظّم المكتبة التلقائي
يجمع الصور من كل مكان، يحذف التكرار، وينظمها في مكتبة واحدة
"""

import os
import sys
import shutil
import hashlib
from pathlib import Path
from datetime import datetime
from collections import defaultdict

# ==================== إعداداتك ====================
# أضف هنا كل المصادر اللي تبي تجمع منها الصور
SOURCE_DIRS = [
    r"D:\\",           # قرص D
    r"E:\\",           # قرص E
    # r"C:\\Users\\YOUR_NAME\\Pictures",  # صور المستخدم
    # أضف مسار الموبايل لو وصلته بالكابل وظهر كقرص
]

# مكان المكتبة النهائية (يفضل يكون في أكبر قرص)
DEST_DIR = r"E:\\HiddenRadiology_Library"

# أنواع الملفات اللي نبحث عنها
IMAGE_EXTS = {
    '.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif', 
    '.gif', '.webp', '.dcm', '.dicom', '.raw', '.nii'
}

# ==================== هيكل المجلدات ====================
FOLDER_STRUCTURE = {
    "01_Raw_Images": ["A_Xray", "B_CT", "C_MRI", "D_Mammography", 
                      "E_Ultrasound", "F_CArm_Fluoro", "G_Other_Modalities"],
    "02_Processed_Images": ["A_Xray", "B_CT", "C_MRI", "D_Mammography", 
                            "E_Ultrasound", "F_CArm_Fluoro", "G_Other_Modalities"],
    "03_Annotated_Images": ["A_Xray", "B_CT", "C_MRI", "D_Mammography", 
                            "E_Ultrasound", "F_CArm_Fluoro", "G_Other_Modalities"],
    "04_Graphics_Illustrations": ["Anatomy_Diagrams", "Pathology_Illustrations", 
                                  "Process_Flowcharts", "Comparison_Charts", "Icons_Symbols"],
    "05_Brand_Assets": ["Logo_Variations", "Thumbnails_Templates", "LowerThirds_Titles", 
                        "Transitions_Overlays", "Backgrounds", "Fonts_Colors"],
    "06_Video_Production": ["OBS_Scenes_Backgrounds", "BRoll_Stock_Footage", 
                            "Screenshots_Tutorials", "Audio_SFX"],
    "07_Archive_Backup": ["2026_Q3", "2026_Q4", "_Old_Unsorted"]
}

# ==================== كلمات مفتاحية للتصنيف التلقائي ====================
KEYWORD_MAP = {
    "A_Xray": ["xray", "x-ray", "x_ray", "radiograph", "plain film", "cxr", "kub", "mammogram"],
    "B_CT": ["ct", "cat scan", "computed tomography", "ct scan", "c.t"],
    "C_MRI": ["mri", "mr scan", "magnetic resonance", "nmr", "m.r.i"],
    "D_Mammography": ["mammo", "mammography", "breast imaging", "tomosynthesis"],
    "E_Ultrasound": ["us", "ultrasound", "sono", "sonography", "echo", "doppler"],
    "F_CArm_Fluoro": ["carm", "c-arm", "fluoro", "fluoroscopy", "angio"],
    "G_Other_Modalities": ["pet", "spect", "nuclear", "scintigraphy"]
}

# ==================== الدوال ====================

def create_folder_structure(base_path):
    """ينشئ هيكل المجلدات"""
    print("📁 جاري إنشاء هيكل المكتبة...")
    for main_folder, sub_folders in FOLDER_STRUCTURE.items():
        for sub in sub_folders:
            path = Path(base_path) / main_folder / sub
            path.mkdir(parents=True, exist_ok=True)
    # ملف README
    readme = Path(base_path) / "README.txt"
    if not readme.exists():
        readme.write_text("""Hidden Radiology Library
========================
01_Raw_Images: الصور الخام (لا تُعدّل)
02_Processed_Images: الصور المعالجة (سطوع/تباين)
03_Annotated_Images: الصور المشروحة (أسهم/دوائر/نصوص)
04_Graphics_Illustrations: رسومات وتوضيحات
05_Brand_Assets: هوية القناة البصرية
06_Video_Production: دعم إنتاج الفيديو
07_Archive_Backup: أرشيف ونسخ احتياطي

نظام التسمية:
[Modality]_[BodyPart]_[Finding]_[View]_[CaseID]_[Status].ext
""", encoding='utf-8')
    print("✅ تم إنشاء الهيكل")


def get_file_hash(filepath):
    """يحسب SHA256 للملف"""
    h = hashlib.sha256()
    try:
        with open(filepath, 'rb') as f:
            for chunk in iter(lambda: f.read(8192), b""):
                h.update(chunk)
        return h.hexdigest()
    except:
        return None


def get_exif_date(filepath):
    """يحاول يقرأ تاريخ التقاط الصورة من EXIF"""
    try:
        from PIL import Image
        from PIL.ExifTags import TAGS
        img = Image.open(filepath)
        exif = img._getexif()
        if exif:
            for tag_id, value in exif.items():
                tag = TAGS.get(tag_id, tag_id)
                if tag in ["DateTimeOriginal", "DateTime", "DateTimeDigitized"]:
                    return datetime.strptime(value, "%Y:%m:%d %H:%M:%S")
    except:
        pass
    # لو فشل، رجّع تاريخ التعديل
    try:
        mtime = os.path.getmtime(filepath)
        return datetime.fromtimestamp(mtime)
    except:
        return datetime.now()


def detect_modality_from_name(filename):
    """يحدد نوع الأشعة من اسم الملف"""
    name_lower = filename.lower()
    for modality, keywords in KEYWORD_MAP.items():
        for kw in keywords:
            if kw in name_lower:
                return modality
    return None


def detect_modality_from_dicom(filepath):
    """يحاول يقرأ DICOM metadata"""
    try:
        import pydicom
        ds = pydicom.dcmread(filepath, stop_before_pixels=True)
        modality = ds.get("Modality", "").upper()
        mapping = {
            "CR": "A_Xray", "DX": "A_Xray", "RF": "A_Xray",
            "CT": "B_CT",
            "MR": "C_MRI", "MRI": "C_MRI",
            "MG": "D_Mammography", "MM": "D_Mammography",
            "US": "E_Ultrasound",
            "XA": "F_CArm_Fluoro", "FL": "F_CArm_Fluoro",
        }
        return mapping.get(modality, "G_Other_Modalities")
    except:
        return None


def classify_image(filepath):
    """يصنّف الصورة وين يتجه"""
    filename = filepath.name
    ext = filepath.suffix.lower()

    # 1. لو DICOM → اقرأ metadata
    if ext in ['.dcm', '.dicom']:
        mod = detect_modality_from_dicom(filepath)
        if mod:
            return "01_Raw_Images", mod

    # 2. حاول من اسم الملف
    mod = detect_modality_from_name(filename)
    if mod:
        return "01_Raw_Images", mod

    # 3. لو صورة عادية (لوجو، رسم) → حطها في Archive
    if ext in ['.png', '.gif', '.webp']:
        return "07_Archive_Backup", "_Old_Unsorted"

    # 4. افتراضي → Archive
    return "07_Archive_Backup", "_Old_Unsorted"


def generate_new_name(filepath, date_obj, case_number):
    """يولّد اسم جديد منظم"""
    ext = filepath.suffix.lower()
    date_str = date_obj.strftime("%Y%m%d")
    # نحتفظ بجزء من الاسم الأصلي (بدون امتداد)
    original = filepath.stem[:30]  # أول 30 حرف
    # نظف الاسم
    clean = "".join(c if c.isalnum() or c in "_-" else "_" for c in original)
    new_name = f"{date_str}_{clean}_Case{case_number:04d}_Raw{ext}"
    return new_name


def collect_and_organize():
    """الدالة الرئيسية"""
    print("=" * 60)
    print("🚀 Hidden Radiology - منظّم المكتبة التلقائي")
    print("=" * 60)

    dest = Path(DEST_DIR)
    dest.mkdir(parents=True, exist_ok=True)

    # 1. إنشاء الهيكل
    create_folder_structure(dest)

    # 2. جمع كل الملفات
    print("\n🔍 جاري البحث عن الصور...")
    all_files = []
    for src in SOURCE_DIRS:
        src_path = Path(src)
        if not src_path.exists():
            print(f"⚠️ المسار غير موجود: {src}")
            continue
        for ext in IMAGE_EXTS:
            try:
                files = list(src_path.rglob(f"*{ext}"))
                all_files.extend(files)
            except PermissionError:
                continue

    print(f"📊 تم العثور على {len(all_files)} ملف صورة")

    # 3. إزالة التكرار
    print("\n🧹 جاري فحص التكرار...")
    seen_hashes = set()
    unique_files = []
    for i, fpath in enumerate(all_files, 1):
        if i % 100 == 0:
            print(f"   تم فحص {i}/{len(all_files)}...")
        h = get_file_hash(fpath)
        if h and h not in seen_hashes:
            seen_hashes.add(h)
            unique_files.append(fpath)

    duplicates = len(all_files) - len(unique_files)
    print(f"✅ ملفات فريدة: {len(unique_files)} | تكرار محذوف: {duplicates}")

    # 4. نسخ وتصنيف
    print("\n📦 جاري نسخ وتصنيف الملفات...")
    stats = defaultdict(int)
    case_counter = 1

    for i, fpath in enumerate(unique_files, 1):
        try:
            # تصنيف
            main_folder, sub_folder = classify_image(fpath)

            # تاريخ
            date_obj = get_exif_date(fpath)

            # اسم جديد
            new_name = generate_new_name(fpath, date_obj, case_counter)
            case_counter += 1

            # المسار النهائي
            target_dir = dest / main_folder / sub_folder
            target_path = target_dir / new_name

            # لو الاسم موجود، زوّد رقم
            counter = 1
            while target_path.exists():
                stem = target_path.stem
                target_path = target_dir / f"{stem}_{counter}{target_path.suffix}"
                counter += 1

            # انسخ
            shutil.copy2(fpath, target_path)
            stats[main_folder] += 1

            if i % 50 == 0:
                print(f"   تم نسخ {i}/{len(unique_files)}...")

        except Exception as e:
            print(f"   ❌ خطأ في: {fpath} - {e}")
            continue

    # 5. التقرير النهائي
    print("\n" + "=" * 60)
    print("📊 تقرير التنظيم:")
    print("=" * 60)
    for folder, count in sorted(stats.items()):
        print(f"   📁 {folder}: {count} ملف")
    print(f"\n🎉 تم بناء المكتبة بنجاح في: {DEST_DIR}")
    print("💡 الخطوة التالية: افتح المجلدات وانقل الصور من Archive إلى أقسامها الصحيحة")
    print("=" * 60)


if __name__ == "__main__":
    # تأكد من وجود Pillow
    try:
        from PIL import Image
    except ImportError:
        print("⚠️ يرجى تثبيت Pillow أولاً: pip install Pillow")
        print("   أو: py -m pip install Pillow")
        sys.exit(1)

    collect_and_organize()
    input("\nاضغط Enter للخروج...")
