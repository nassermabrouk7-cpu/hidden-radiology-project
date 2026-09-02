@echo off
chcp 65001 >nul
title Hidden Radiology - Organizer
color 0A

echo ============================================
echo   🚀 Hidden Radiology - Auto Organizer
echo ============================================
echo.

python --version >nul 2>&1
if errorlevel 1 (
    echo ⚠️ Python غير موجود! جاري التثبيت...
    winget install Python.Python.3.11 --accept-source-agreements --accept-package-agreements -e --silent
    refreshenv
)

echo ✅ Python موجود
echo 📦 جاري تثبيت Pillow...
python -m pip install Pillow -q

echo 🚀 جاري تشغيل المنظم...
python "%~dp0HiddenRadiology_AutoOrganizer.py"

echo.
pause
