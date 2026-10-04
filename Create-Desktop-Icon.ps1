
# Create Desktop Shortcut with Royal Icon 👑
$WshShell = New-Object -comObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut("$env:USERPROFILE\Desktop\Hidden Radiology Royal 👑.lnk")
$Shortcut.TargetPath = "E:\hidden-radiology-factory\ROYAL-FACTORY.bat"
$Shortcut.WorkingDirectory = "E:\hidden-radiology-factory"
$Shortcut.IconLocation = "E:\hidden-radiology-factory\public\logos\HR-Royal-Icon.ico"
$Shortcut.Description = "Hidden Radiology - Royal Factory Control - Desktop Only"
$Shortcut.Save()

Write-Host "✅ Icon created on Desktop!" -ForegroundColor Cyan
