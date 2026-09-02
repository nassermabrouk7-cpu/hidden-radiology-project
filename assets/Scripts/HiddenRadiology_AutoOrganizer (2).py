#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Hidden Radiology - Auto Organizer
يجمع الصور من D و E وينظمها في المكتبة
"""

import os
import shutil
import hashlib
import sys
from pathlib import Path
from datetime import datetime
from collections import defaultdict

# ==================== إعداداتك ====================
# أضف هنا كل المصادر اللي تبي تجمع منها الصور
SOURCE_DIRS = [
    r"D:\",
    r"E:\",
    # r"C:\Users\3alamiaa\Pictures",  # فعّل لو تبي
]

# مكان المكتبة النهائية
DEST_DIR = r"E:\HiddenRadiology_Library"

# أنواع الملفات
IMAGE_EXTS = {
    '.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif',
    '.gif', '.webp', '.dcm', '.dicom', '.raw', '.nii'
}

# كلمات مفتاحية للتصنيف
KEYWORD_MAP = {
    "A_Xray": ["xray", "x-ray", "x_ray", "radiograph", "plain film", "cxr", "kub"],
    "B_CT": ["ct", "cat scan", "computed tomography", "ct scan", "c.t"],
    "C_MRI": ["mri", "mr scan", "magnetic resonance", "nmr", "m.r.i"],
    "D_Mammography": ["mammo", "mammography", "breast imaging", "tomosynthesis"],
    "E_Ultrasound": ["us", "ultrasound", "sono", "sonography", "echo", "doppler"],
    "F_CArm_Fluoro": ["carm", "c-arm", "fluoro", "fluoroscopy", "angio"],
    "G_Other_Modalities": ["pet", "spect", "nuclear", "scintigraphy"]
}

# ==================== الدوال ====================

def file_hash(filepath):
    """يحسب SHA256 للملف"""
    h = hashlib.sha256()
    try:
        with open(filepath, 'rb') as f:
            for chunk in iter(lambda: f.read(8192), b""):
                h.update(chunk)
        return h.hexdigest()
    except:
        return None


def get_date(filepath):
    """يقرأ تاريخ التقاط الصورة"""
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
    try:
        return datetime.fromtimestamp(os.path.getmtime(filepath))
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
    """يصنّف الصورة"""
    filename = filepath.name
    ext = filepath.suffix.lower()

    if ext in ['.dcm', '.dicom']:
        mod = detect_modality_from_dicom(filepath)
        if mod:
            return "01_Raw_Images", mod

    mod = detect_modality_from_name(filename)
    if mod:
        return "01_Raw_Images", mod

    if ext in ['.png', '.gif', '.webp']:
        return "07_Archive_Backup", "_Old_Unsorted"

    return "07_Archive_Backup", "_Old_Unsorted"


def generate_new_name(filepath, date_obj, case_number):
    """يولّد اسم جديد منظم"""
    ext = filepath.suffix.lower()
    original = filepath.stem[:30]
    clean = "".join(c if c.isalnum() or c in "_-" else "_" for c in original)
    return f"{date_obj.strftime('%Y%m%d')}_{clean}_Case{case_number:04d}_Raw{ext}"


def main():
    print("=" * 60)
    print("🚀 Hidden Radiology - Auto Organizer")
    print("=" * 60)

    dest = Path(DEST_DIR)
    dest.mkdir(parents=True, exist_ok=True)

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

    print("\n🧹 جاري فحص التكرار...")
    seen_hashes = set()
    unique_files = []
    for i, fpath in enumerate(all_files, 1):
        if i % 100 == 0:
            print(f"   تم فحص {i}/{len(all_files)}...")
        h = file_hash(fpath)
        if h and h not in seen_hashes:
            seen_hashes.add(h)
            unique_files.append(fpath)

    duplicates = len(all_files) - len(unique_files)
    print(f"✅ ملفات فريدة: {len(unique_files)} | تكرار محذوف: {duplicates}")

    print("\n📦 جاري نسخ وتصنيف الملفات...")
    stats = defaultdict(int)
    case_counter = 1

    for i, fpath in enumerate(unique_files, 1):
        try:
            main_folder, sub_folder = classify_image(fpath)
            date_obj = get_date(fpath)
            new_name = generate_new_name(fpath, date_obj, case_counter)
            case_counter += 1

            target_dir = dest / main_folder / sub_folder
            target_path = target_dir / new_name

            counter = 1
            while target_path.exists():
                stem = target_path.stem
                target_path = target_dir / f"{stem}_{counter}{target_path.suffix}"
                counter += 1

            shutil.copy2(fpath, target_path)
            stats[main_folder] += 1

            if i % 50 == 0:
                print(f"   تم نسخ {i}/{len(unique_files)}...")

        except Exception as e:
            print(f"   ❌ خطأ في: {fpath} - {e}")
            continue

    print("\n" + "=" * 60)
    print("📊 تقرير التنظيم:")
    print("=" * 60)
    for folder, count in sorted(stats.items()):
        print(f"   📁 {folder}: {count} ملف")
    print(f"\n🎉 تم بناء المكتبة بنجاح في: {DEST_DIR}")
    print("💡 الخطوة التالية: افتح المجلدات وانقل الصور من Archive إلى أقسامها الصحيحة")
    print("=" * 60)


if __name__ == "__main__":
    try:
        from PIL import Image
    except ImportError:
        print("⚠️ جاري تثبيت Pillow...")
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow", "-q"])
        from PIL import Image

    main()
    input("\nاضغط Enter للخروج...")
