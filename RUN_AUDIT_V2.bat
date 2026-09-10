@echo off
setlocal
cd /d "E:\hidden-radiology-v2"
echo ============================================
echo Hidden Radiology - MRI Audit
echo Current dir:
cd
echo ============================================
echo.

echo [1] Git status check...
git status 2>&1
echo.

echo [2] Checking image folders...
if exist "public\assets\images\ar\cases" (
  echo FOUND: public\assets\images\ar\cases
  dir "public\assets\images\ar\cases" /s /b
) else (
  echo NOT FOUND: public\assets\images\ar\cases
)
echo.

echo Searching all images in public\assets\images...
dir "public\assets\images" /s /b 2>nul | findstr /i ".jpg .jpeg .png .webp"
echo.

echo [3] Checking code structure...
if exist "src\data" dir "src\data" /b
if exist "src\app" dir "src\app" /s /b | findstr /i "case"
echo.

echo [4] Running audit with PowerShell...
powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-ChildItem -Path 'public/assets/images' -Recurse -File -ErrorAction SilentlyContinue | Where-Object { @('.jpg','.jpeg','.png','.webp') -contains $_.Extension.ToLower() } | Select-Object FullName, Length | Format-Table -AutoSize"

echo.
echo [5] Saving inventory to tools\mri-inventory.json
powershell -NoProfile -ExecutionPolicy Bypass -File "tools\audit-simple.ps1"

echo.
echo ============================================
echo DONE - Copy all text above and send to me
echo ============================================
pause
