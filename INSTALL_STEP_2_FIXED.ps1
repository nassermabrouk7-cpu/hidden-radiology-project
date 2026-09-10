Write-Host "=== STEP 2 - Connect Cases to UI and Build ===" -ForegroundColor Green

Set-Location "E:\hidden-radiology-v2"
Write-Host "[1/4] Checking src\data\mri-cases.approved.ts..." -ForegroundColor Yellow
if(Test-Path "src\data\mri-cases.approved.ts"){
  Write-Host "  Found OK" -ForegroundColor Green
} else {
  Write-Host "  NOT FOUND" -ForegroundColor Red
  pause
  exit
}

Write-Host "[2/4] Looking for main cases file..." -ForegroundColor Yellow
Get-ChildItem -Path "src" -Recurse -File -Filter "*.ts" | Select-String -Pattern "export const cases" | Select-Object -First 5 Path

Write-Host "[3/4] Checking CaseCard components..." -ForegroundColor Yellow
if(Test-Path "components\case\CaseCard.tsx"){
  Write-Host "  Found: components\case\CaseCard.tsx" -ForegroundColor Green
}
if(Test-Path "components\case\CaseDetail.tsx"){
  Write-Host "  Found: components\case\CaseDetail.tsx" -ForegroundColor Green
}

Write-Host "[4/4] Running npm run build - wait 1-2 minutes..." -ForegroundColor Yellow
npm run build 2>&1 | Tee-Object -FilePath "build-log.txt"

Write-Host ""
Write-Host "============================================"
Write-Host "Build finished. Check build-log.txt"
Write-Host "If you see Compiled successfully you are DONE"
Write-Host "============================================"
pause
