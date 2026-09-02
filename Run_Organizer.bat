@echo off
chcp 65001 >nul
title Hidden Radiology - منظم المكتبة
color 0A

echo ============================================
echo   🚀 Hidden Radiology - منظم المكتبة التلقائي
echo ============================================
echo.

:: Check Python
python --version >nul 2>&1
if errorlevel 1 (
    echo ⚠️ Python غير مثبت!
    echo 🔗 جاري فتح رابط التحميل...
    start https://www.python.org/downloads/
    echo.
    echo 📋 الخطوات:
    echo    1. حمّل Python 3.11 أو أحدث
    echo    2. أثناء التثبيت: ✓ صحّي "Add Python to PATH"
    echo    3. شغّل هذا الملف مرة ثانية
    echo.
    pause
    exit /b
)

echo ✅ Python موجود
echo 📦 جاري تثبيت Pillow (مكتبة الصور)...
python -m pip install Pillow -q

echo 🚀 جاري تشغيل المنظم...
python "%~dp0HiddenRadiology_AutoOrganizer.py"

echo.
pause
