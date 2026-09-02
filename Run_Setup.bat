@echo off
chcp 65001 >nul
title Hidden Radiology - Setup
color 0B
echo ============================================
echo   🚀 Hidden Radiology - تثبيت المشروع
echo ============================================
echo.
echo ⚠️  يجب تشغيل هذا الملف كـ Administrator!
echo.
echo جاري التحقق...
echo.

net session >nul 2>&1
if %errorLevel% neq 0 (
    echo ❌ لم يتم التشغيل كـ Administrator!
    echo.
    echo 📋 الخطوات:
    echo    1. اضغط Right-Click على هذا الملف
    echo    2. اختر "Run as administrator"
    echo.
    pause
    exit /b
)

echo ✅ تم التحقق من الصلاحيات
echo 🚀 جاري تشغيل السكربت...
echo.
powershell -ExecutionPolicy Bypass -File "%~dp0Setup_HiddenRadiology.ps1"
