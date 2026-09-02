#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import shutil
from pathlib import Path

# المسارات
SRC = Path(r"E:\HiddenRadiology_Library\07_Archive_Backup\_Old_Unsorted")
LIB = Path(r"E:\HiddenRadiology_Library")

# قواعد التصنيف: (كلمة في الاسم, المجلد الهدف)
RULES = [
    # CT
    (["ct", "cat scan", "computed tomography"], "01_Raw_Images/B_CT"),
    # X-ray
    (["xray", "x-ray", "x_ray", "radiograph", "cxr", "kub", "plain film"], "01_Raw_Images/A_Xray"),
    # MRI
    (["mri", "mr scan", "magnetic resonance"], "01_Raw_Images/C_MRI"),
    # Mammography
    (["mammo", "mammography", "breast imaging"], "01_Raw_Images/D_Mammography"),
    # Ultrasound
    (["ultrasound", "sono", "sonography", "echo", "doppler"], "01_Raw_Images/E_Ultrasound"),
    # C-Arm
    (["carm", "c-arm", "fluoro", "fluoroscopy"], "01_Raw_Images/F_CArm_Fluoro"),
    # Brand
    (["logo", "brand", "thumbnail", "thumb", "lowerthird", "overlay", "background"], "05_Brand_Assets/Logo_Variations"),
    # Graphics
    (["diagram", "chart", "flow", "illustration", "anatomy", "pathology", "icon"], "04_Graphics_Illustrations/Anatomy_Diagrams"),
    # Video/Screenshots
    (["screenshot", "screen", "obs", "broll", "tutorial"], "06_Video_Production/Screenshots_Tutorials"),
]

moved = 0
stayed = 0

print("=" * 50)
print("🚀 Hidden Radiology - فرز الصور")
print("=" * 50)
print(f"📁 المصدر: {SRC}")
print("")

for file in SRC.iterdir():
    if not file.is_file():
        continue
    
    name_lower = file.name.lower()
    dest_folder = None
    
    for keywords, folder in RULES:
        for kw in keywords:
            if kw in name_lower:
                dest_folder = folder
                break
        if dest_folder:
            break
    
    if dest_folder:
        target_dir = LIB / dest_folder
        target_dir.mkdir(parents=True, exist_ok=True)
        target_path = target_dir / file.name
        
        # لو الاسم موجود، زود رقم
        counter = 1
        while target_path.exists():
            target_path = target_dir / f"{file.stem}_{counter}{file.suffix}"
            counter += 1
        
        shutil.move(str(file), str(target_path))
        moved += 1
        print(f"✅ {file.name} → {dest_folder}")
    else:
        stayed += 1

print("")
print("=" * 50)
print(f"📊 النتيجة:")
print(f"   ✅ تم فرز: {moved} صورة")
print(f"   ⏳ باقي في _Old_Unsorted: {stayed} صورة")
print("=" * 50)
print("💡 افتح _Old_Unsorted وانقل الباقي يدوياً")
input("\nاضغط Enter للخروج...")