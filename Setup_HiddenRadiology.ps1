
#Requires -RunAsAdministrator
# Hidden Radiology - سكربت تثبيت المشروع كامل
# يثبت كل البرامج وينزل ملفات السكربت تلقائياً

param(
    [string]$InstallDir = "$env:USERPROFILE\HiddenRadiology_Setup"
)

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# ==================== الألوان ====================
function Write-Success { param($msg) Write-Host "✅ $msg" -ForegroundColor Green }
function Write-Info  { param($msg) Write-Host "📦 $msg" -ForegroundColor Cyan }
function Write-Warn  { param($msg) Write-Host "⚠️  $msg" -ForegroundColor Yellow }
function Write-Error { param($msg) Write-Host "❌ $msg" -ForegroundColor Red }

# ==================== التحقق من Administrator ====================
Write-Host ""
Write-Host "========================================" -ForegroundColor DarkCyan
Write-Host "  🚀 Hidden Radiology - تثبيت المشروع" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor DarkCyan
Write-Host ""

if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Error "يجب تشغيل PowerShell كـ Administrator!"
    Write-Host "   اضغط Right-Click على PowerShell → Run as Administrator" -ForegroundColor Yellow
    Read-Host "اضغط Enter للخروج"
    exit 1
}

# ==================== هيكل البرامج ====================
$Programs = @(
    @{ Name = "Python 3.11"; Id = "Python.Python.3.11"; Type = "winget"; Post = "pip" },
    @{ Name = "GIMP"; Id = "GIMP.GIMP"; Type = "winget"; Post = $null },
    @{ Name = "OBS Studio"; Id = "OBSProject.OBSStudio"; Type = "winget"; Post = $null },
    @{ Name = "CapCut"; Id = "ByteDance.CapCut"; Type = "winget"; Post = $null },
    @{ Name = "VS Code"; Id = "Microsoft.VisualStudioCode"; Type = "winget"; Post = $null },
    @{ Name = "XnView MP"; Id = "XnSoft.XnViewMP"; Type = "winget"; Post = $null },
    @{ Name = "Syncthing"; Id = "Syncthing.Syncthing"; Type = "winget"; Post = $null },
    @{ Name = "MicroDicom"; Id = "MicroDicom.MicroDicomViewer"; Type = "winget"; Post = $null },
    @{ Name = "Bulk Rename Utility"; Id = "bulkrenameutility"; Type = "choco"; Post = $null }
)

# ==================== التحقق من winget ====================
Write-Info "التحقق من winget..."
$winget = Get-Command winget -ErrorAction SilentlyContinue
if (-not $winget) {
    Write-Warn "winget غير موجود! جاري التثبيت..."
    try {
        $progressPreference = 'silentlyContinue'
        Invoke-WebRequest -Uri https://aka.ms/getwinget -OutFile "$env:TEMP\Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle" -UseBasicParsing
        Add-AppxPackage -Path "$env:TEMP\Microsoft.DesktopAppInstaller_8wekyb3d8bbwe.msixbundle" -ErrorAction SilentlyContinue
        Write-Success "تم تثبيت winget"
    } catch {
        Write-Error "فشل تثبيت winget. حاول يدوياً من: https://github.com/microsoft/winget-cli/releases"
        Read-Host "اضغط Enter للخروج"
        exit 1
    }
} else {
    Write-Success "winget موجود"
}

# ==================== التحقق من Chocolatey ====================
Write-Info "التحقق من Chocolatey..."
$choco = Get-Command choco -ErrorAction SilentlyContinue
if (-not $choco) {
    Write-Warn "Chocolatey غير موجود! جاري التثبيت..."
    Set-ExecutionPolicy Bypass -Scope Process -Force
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
    Invoke-Expression ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    refreshenv
    Write-Success "تم تثبيت Chocolatey"
} else {
    Write-Success "Chocolatey موجود"
}

# ==================== تثبيت البرامج ====================
Write-Host ""
Write-Host "🚀 بدء تثبيت البرامج..." -ForegroundColor Cyan
Write-Host ""

$installed = @()
$failed = @()

foreach ($prog in $Programs) {
    Write-Info "جاري تثبيت: $($prog.Name)..."
    try {
        if ($prog.Type -eq "winget") {
            winget install --id $prog.Id --accept-source-agreements --accept-package-agreements -e --silent
            if ($LASTEXITCODE -ne 0 -and $LASTEXITCODE -ne -1978335189) { throw "winget exit code: $LASTEXITCODE" }
        } elseif ($prog.Type -eq "choco") {
            choco install $prog.Id -y --no-progress
        }
        Write-Success "تم تثبيت: $($prog.Name)"
        $installed += $prog.Name

        # Post-install: Pillow
        if ($prog.Post -eq "pip") {
            Write-Info "جاري تثبيت مكتبة Pillow..."
            $pythonPath = "$env:LOCALAPPDATA\Programs\Python\Python311\python.exe"
            if (Test-Path $pythonPath) {
                & $pythonPath -m pip install --upgrade pip -q
                & $pythonPath -m pip install Pillow -q
                Write-Success "تم تثبيت Pillow"
            } else {
                # Try PATH
                python -m pip install --upgrade pip -q
                python -m pip install Pillow -q
                Write-Success "تم تثبيت Pillow"
            }
        }
    } catch {
        Write-Error "فشل تثبيت: $($prog.Name) - $_"
        $failed += $prog.Name
    }
    Write-Host ""
}

# ==================== إنشاء مجلد المشروع ====================
Write-Info "جاري إنشاء مجلد المشروع..."
$projectDir = "$env:USERPROFILE\Documents\HiddenRadiology_Project"
New-Item -ItemType Directory -Force -Path $projectDir | Out-Null
New-Item -ItemType Directory -Force -Path "$projectDir\Scripts" | Out-Null
New-Item -ItemType Directory -Force -Path "$projectDir\Library" | Out-Null
Write-Success "تم إنشاء المجلدات"

# ==================== تحميل ملفات السكربت ====================
Write-Info "جاري تحميل ملفات السكربت..."

$autoOrganizerUrl = "https://raw.githubusercontent.com/hiddenradiology/setup/main/HiddenRadiology_AutoOrganizer.py"
$runBatUrl = "https://raw.githubusercontent.com/hiddenradiology/setup/main/Run_Organizer.bat"

# Since we don't have a real GitHub repo, we'll create local copies
# In real usage, these would be downloaded from a URL

$autoOrganizerPath = "$projectDir\Scripts\HiddenRadiology_AutoOrganizer.py"
$runBatPath = "$projectDir\Scripts\Run_Organizer.bat"

# We'll write the files directly here (embedded)
$autoOrganizerContent = @'
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Hidden Radiology - Auto Organizer
"""

import os, shutil, hashlib
from pathlib import Path
from datetime import datetime
from collections import defaultdict

SOURCE_DIRS = [r"D:\\", r"E:\\"]
DEST_DIR = r"E:\\HiddenRadiology_Library"
IMAGE_EXTS = {'.jpg','.jpeg','.png','.bmp','.tiff','.tif','.gif','.webp','.dcm','.dicom','.raw','.nii'}

FOLDER_STRUCTURE = {
    "01_Raw_Images": ["A_Xray","B_CT","C_MRI","D_Mammography","E_Ultrasound","F_CArm_Fluoro","G_Other_Modalities"],
    "02_Processed_Images": ["A_Xray","B_CT","C_MRI","D_Mammography","E_Ultrasound","F_CArm_Fluoro","G_Other_Modalities"],
    "03_Annotated_Images": ["A_Xray","B_CT","C_MRI","D_Mammography","E_Ultrasound","F_CArm_Fluoro","G_Other_Modalities"],
    "04_Graphics_Illustrations": ["Anatomy_Diagrams","Pathology_Illustrations","Process_Flowcharts","Comparison_Charts","Icons_Symbols"],
    "05_Brand_Assets": ["Logo_Variations","Thumbnails_Templates","LowerThirds_Titles","Transitions_Overlays","Backgrounds","Fonts_Colors"],
    "06_Video_Production": ["OBS_Scenes_Backgrounds","BRoll_Stock_Footage","Screenshots_Tutorials","Audio_SFX"],
    "07_Archive_Backup": ["2026_Q3","2026_Q4","_Old_Unsorted"]
}

KEYWORD_MAP = {
    "A_Xray": ["xray","x-ray","x_ray","radiograph","plain film","cxr","kub","mammogram"],
    "B_CT": ["ct","cat scan","computed tomography","ct scan","c.t"],
    "C_MRI": ["mri","mr scan","magnetic resonance","nmr","m.r.i"],
    "D_Mammography": ["mammo","mammography","breast imaging","tomosynthesis"],
    "E_Ultrasound": ["us","ultrasound","sono","sonography","echo","doppler"],
    "F_CArm_Fluoro": ["carm","c-arm","fluoro","fluoroscopy","angio"],
    "G_Other_Modalities": ["pet","spect","nuclear","scintigraphy"]
}

def create_structure(base):
    print("📁 Creating library structure...")
    for main, subs in FOLDER_STRUCTURE.items():
        for s in subs:
            Path(base, main, s).mkdir(parents=True, exist_ok=True)
    readme = Path(base, "README.txt")
    if not readme.exists():
        readme.write_text("""Hidden Radiology Library
========================
01_Raw_Images: Raw images (unedited)
02_Processed_Images: Processed (brightness/contrast)
03_Annotated_Images: Annotated (arrows/circles/text)
04_Graphics_Illustrations: Diagrams & illustrations
05_Brand_Assets: Channel visual identity
06_Video_Production: Video production support
07_Archive_Backup: Archive & backup

Naming: [Modality]_[BodyPart]_[Finding]_[View]_[CaseID]_[Status].ext
""", encoding='utf-8')
    print("✅ Structure created")

def file_hash(fp):
    h = hashlib.sha256()
    try:
        with open(fp, 'rb') as f:
            for chunk in iter(lambda: f.read(8192), b""):
                h.update(chunk)
        return h.hexdigest()
    except: return None

def get_date(fp):
    try:
        from PIL import Image
        from PIL.ExifTags import TAGS
        img = Image.open(fp)
        ex = img._getexif()
        if ex:
            for tid, val in ex.items():
                if TAGS.get(tid) in ["DateTimeOriginal","DateTime","DateTimeDigitized"]:
                    return datetime.strptime(val, "%Y:%m:%d %H:%M:%S")
    except: pass
    try: return datetime.fromtimestamp(os.path.getmtime(fp))
    except: return datetime.now()

def detect_modality(name):
    nl = name.lower()
    for mod, kws in KEYWORD_MAP.items():
        for kw in kws:
            if kw in nl: return mod
    return None

def detect_dicom(fp):
    try:
        import pydicom
        ds = pydicom.dcmread(fp, stop_before_pixels=True)
        mod = ds.get("Modality","").upper()
        mp = {"CR":"A_Xray","DX":"A_Xray","RF":"A_Xray","CT":"B_CT","MR":"C_MRI","MRI":"C_MRI","MG":"D_Mammography","MM":"D_Mammography","US":"E_Ultrasound","XA":"F_CArm_Fluoro","FL":"F_CArm_Fluoro"}
        return mp.get(mod, "G_Other_Modalities")
    except: return None

def classify(fp):
    fn = fp.name
    ext = fp.suffix.lower()
    if ext in ['.dcm','.dicom']:
        m = detect_dicom(fp)
        if m: return "01_Raw_Images", m
    m = detect_modality(fn)
    if m: return "01_Raw_Images", m
    if ext in ['.png','.gif','.webp']: return "07_Archive_Backup", "_Old_Unsorted"
    return "07_Archive_Backup", "_Old_Unsorted"

def new_name(fp, dt, cn):
    ext = fp.suffix.lower()
    orig = fp.stem[:30]
    clean = "".join(c if c.isalnum() or c in "_-" else "_" for c in orig)
    return f"{dt.strftime('%Y%m%d')}_{clean}_Case{cn:04d}_Raw{ext}"

def main():
    print("="*60)
    print("🚀 Hidden Radiology - Auto Organizer")
    print("="*60)
    dest = Path(DEST_DIR)
    dest.mkdir(parents=True, exist_ok=True)
    create_structure(dest)
    print("\n🔍 Searching for images...")
    files = []
    for src in SOURCE_DIRS:
        sp = Path(src)
        if not sp.exists(): print(f"⚠️ Not found: {src}"); continue
        for ext in IMAGE_EXTS:
            try: files.extend(sp.rglob(f"*{ext}"))
            except PermissionError: continue
    print(f"📊 Found: {len(files)} images")
    print("\n🧹 Removing duplicates...")
    seen = set(); unique = []
    for i, f in enumerate(files, 1):
        if i % 100 == 0: print(f"   Checked {i}/{len(files)}...")
        h = file_hash(f)
        if h and h not in seen: seen.add(h); unique.append(f)
    print(f"✅ Unique: {len(unique)} | Duplicates removed: {len(files)-len(unique)}")
    print("\n📦 Copying & classifying...")
    stats = defaultdict(int); case_num = 1
    for i, f in enumerate(unique, 1):
        try:
            main_f, sub_f = classify(f)
            dt = get_date(f)
            nn = new_name(f, dt, case_num); case_num += 1
            td = dest / main_f / sub_f
            tp = td / nn
            c = 1
            while tp.exists(): tp = td / f"{tp.stem}_{c}{tp.suffix}"; c += 1
            shutil.copy2(f, tp); stats[main_f] += 1
            if i % 50 == 0: print(f"   Copied {i}/{len(unique)}...")
        except Exception as e: print(f"   ❌ Error: {f} - {e}"); continue
    print("\n" + "="*60)
    print("📊 Report:")
    for folder, count in sorted(stats.items()): print(f"   📁 {folder}: {count} files")
    print(f"\n🎉 Library built at: {DEST_DIR}")
    print("💡 Next: Move images from Archive to correct folders")
    print("="*60)

if __name__ == "__main__":
    try: from PIL import Image
    except ImportError:
        print("⚠️ Please install Pillow: python -m pip install Pillow")
        input("Press Enter..."); exit(1)
    main(); input("\nPress Enter to exit...")
'@

$runBatContent = @'
@echo off
chcp 65001 >nul
title Hidden Radiology - Organizer
color 0A
echo ============================================
echo   Hidden Radiology - Auto Organizer
echo ============================================
echo.
python --version >nul 2>&1
if errorlevel 1 (
    echo ⚠️ Python not found!
    start https://www.python.org/downloads/
    pause
    exit /b
)
echo ✅ Python found
echo 📦 Installing Pillow...
python -m pip install Pillow -q
echo 🚀 Running organizer...
python "%~dp0HiddenRadiology_AutoOrganizer.py"
echo.
pause
'@

# Save files
$autoOrganizerContent | Out-File -FilePath $autoOrganizerPath -Encoding UTF8
$runBatContent | Out-File -FilePath $runBatPath -Encoding UTF8

Write-Success "تم تحميل ملفات السكربت"

# ==================== إنشاء اختصار سطح المكتب ====================
Write-Info "جاري إنشاء اختصارات..."
$desktop = [Environment]::GetFolderPath("Desktop")

# Shortcut for Organizer
$WshShell = New-Object -comObject WScript.Shell
$shortcut = $WshShell.CreateShortcut("$desktop\HiddenRadiology_Organizer.lnk")
$shortcut.TargetPath = $runBatPath
$shortcut.WorkingDirectory = "$projectDir\Scripts"
$shortcut.IconLocation = "%SystemRoot%\System32\SHELL32.dll,14"
$shortcut.Save()

# Shortcut for Project Folder
$shortcut2 = $WshShell.CreateShortcut("$desktop\HiddenRadiology_Project.lnk")
$shortcut2.TargetPath = $projectDir
$shortcut2.IconLocation = "%SystemRoot%\System32\SHELL32.dll,4"
$shortcut2.Save()

Write-Success "تم إنشاء الاختصارات على سطح المكتب"

# ==================== التقرير النهائي ====================
Write-Host ""
Write-Host "========================================" -ForegroundColor DarkGreen
Write-Host "  🎉 اكتمل تثبيت المشروع!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor DarkGreen
Write-Host ""
Write-Host "📁 مجلد المشروع: $projectDir" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ البرامج المثبتة:" -ForegroundColor Green
foreach ($p in $installed) { Write-Host "   • $p" -ForegroundColor White }
if ($failed.Count -gt 0) {
    Write-Host ""
    Write-Host "❌ البرامج اللي فشلت:" -ForegroundColor Red
    foreach ($p in $failed) { Write-Host "   • $p" -ForegroundColor Yellow }
}
Write-Host ""
Write-Host "🚀 الخطوة التالية:" -ForegroundColor Cyan
Write-Host "   1. افتح سطح المكتب" -ForegroundColor White
Write-Host "   2. انقر: HiddenRadiology_Organizer" -ForegroundColor White
Write-Host "   3. أو عدّل المسارات في: $autoOrganizerPath" -ForegroundColor White
Write-Host ""
Read-Host "اضغط Enter للخروج"
