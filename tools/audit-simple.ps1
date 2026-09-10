Write-Host "=== Hidden Radiology - Simple Audit (No Node needed) ===" -ForegroundColor Cyan
$BASES = @("public/assets/images/ar/cases", "public/assets/images/en/cases", "public/assets/images/ar", "public/assets/images")
$EXTS = @(".jpg",".jpeg",".png",".webp")
$inventory = @()

foreach($base in $BASES){
  if(Test-Path $base){
    Write-Host "✅ بفحص: $base" -ForegroundColor Green
    $files = Get-ChildItem -Path $base -Recurse -File | Where-Object { $EXTS -contains $_.Extension.ToLower() }
    foreach($f in $files){
      $relUrl = "/" + ($f.FullName.Replace((Get-Location).Path + "\","").Replace("\","/").Replace("public/",""))
      $modality = "UNKNOWN"
      if($f.DirectoryName.ToLower().Contains("mri")){ $modality="MRI" }
      elseif($f.DirectoryName.ToLower().Contains("xray") -or $f.DirectoryName.ToLower().Contains("x-ray")){ $modality="XRAY" }
      elseif($f.DirectoryName.ToLower().Contains("ultra")){ $modality="ULTRASOUND" }
      elseif($f.DirectoryName.ToLower().Contains("mammo")){ $modality="MAMMO" }

      $inventory += [PSCustomObject]@{
        file = $f.Name
        folder = $f.DirectoryName.Replace((Get-Location).Path + "\","")
        url = $relUrl
        kb = [math]::Round($f.Length/1024,1)
        modality = $modality
        fullPath = $f.FullName
      }
    }
    break
  }
}

Write-Host "`n=== MRI CASE AUDIT ===" -ForegroundColor Yellow
Write-Host "Total images: $($inventory.Count)"
$mri = $inventory | Where-Object { $_.modality -eq "MRI" }
Write-Host "Potential MRI cases: $($mri.Count)`n" -ForegroundColor Yellow

foreach($img in $mri){
  Write-Host "$($img.folder) | $($img.file) | $($img.kb)KB | $($img.url)"
}

if($inventory.Count -gt 0){
  $inventory | ConvertTo-Json -Depth 3 | Set-Content -Path "tools/mri-inventory.json" -Encoding UTF8
  Write-Host "`n✅ تم حفظ: tools/mri-inventory.json" -ForegroundColor Green
  Write-Host "الملفات الكاملة:" -ForegroundColor Cyan
  $inventory | Format-Table file, modality, kb, url -AutoSize
} else {
  Write-Host "`n❌ لم يتم العثور على أي صور! تأكد من المسار" -ForegroundColor Red
  Write-Host "محتويات public:" 
  Get-ChildItem public -Recurse -ErrorAction SilentlyContinue | Select-Object FullName | Format-List
}

# فحص ملفات الكود
Write-Host "`n=== فحص كود Cases ===" -ForegroundColor Yellow
$codePaths = @("src/data", "src/app", "lib", "components")
foreach($cp in $codePaths){
  if(Test-Path $cp){
    $casesFiles = Get-ChildItem -Path $cp -Recurse -File | Where-Object { $_.Name.ToLower().Contains("case") }
    if($casesFiles){
      Write-Host "Found in ${cp}:" -ForegroundColor Green
      $casesFiles | ForEach-Object { Write-Host $_.FullName }
    }
  }
}
