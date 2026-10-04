
@echo off
title Fix Royal Factory Startup 👑
color 0A
echo.
echo  اقفل الصفحات اللي بتفتح مع الويندوز...
echo.

REM 1- شيل من Startup Folder
echo  [1] بشيل من Startup...
del "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\Hidden Radiology*.lnk" 2>nul
del "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\ROYAL-FACTORY*.lnk" 2>nul
del "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\factory*.lnk" 2>nul

REM 2- شيل من Registry Run
echo  [2] بشيل من Registry...
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Run" /v "HiddenRadiology" /f 2>nul
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Run" /v "RoyalFactory" /f 2>nul

REM 3- شيل من Task Scheduler
echo  [3] بشيل من Task Scheduler...
schtasks /delete /tn "HiddenRadiology" /f 2>nul
schtasks /delete /tn "RoyalFactory" /f 2>nul

echo.
echo  [4] بقفل البراوزر اللي بيفتح تلقائي...
taskkill /F /IM chrome.exe /T 2>nul
taskkill /F /IM msedge.exe /T 2>nul

echo.
echo  ✅ اتقفلت! الصفحات /admin/orders و /admin/factory مش هتفتح تاني مع اللاب توب
echo  ✅ وحتى لو حد حاول يفتحها = 404
echo.
pause
