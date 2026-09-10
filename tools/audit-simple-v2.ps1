$ErrorActionPreference = "SilentlyContinue"
Write-Host "=== Simple Audit ==="
$base = "public/assets/images"
if(!(Test-Path $base)){
  Write-Host "NOT FOUND: $base"
  Write-Host "Trying to find public folder..."
  Get-ChildItem -Path "." -Directory -Recurse -Depth 4 | Where-Object { $_.Name -eq "public" } | Select-Object FullName
  exit
}

$exts = @('.jpg','.jpeg','.png','.webp')
$files = Get-ChildItem -Path $base -Recurse -File | Where-Object { $exts -contains $_.Extension.ToLower() }

Write-Host "Total images found: $($files.Count)"
Write-Host ""

foreach($f in $files){
  $rel = $f.FullName.Replace((Get-Location).Path + "\","").Replace("\","/")
  $url = "/" + $rel.Replace("public/","")
  $mod = "UNKNOWN"
  if($f.FullName.ToLower().Contains("\mri\")){ $mod="MRI" }
  elseif($f.FullName.ToLower().Contains("\xray\") -or $f.FullName.ToLower().Contains("\x-ray\")){ $mod="XRAY" }
  elseif($f.FullName.ToLower().Contains("\ultrasound\") -or $f.FullName.ToLower().Contains("\us\")){ $mod="US" }
  elseif($f.FullName.ToLower().Contains("\mammo\")){ $mod="MAMMO" }
  Write-Host "$mod | $($f.Name) | $([math]::Round($f.Length/1024))KB | $url"
}

# Save JSON
$list = @()
foreach($f in $files){
  $rel = $f.FullName.Replace((Get-Location).Path + "\","").Replace("\","/")
  $url = "/" + $rel.Replace("public/","")
  $list += @{ file=$f.Name; url=$url; path=$f.FullName; kb=[math]::Round($f.Length/1024,1) }
}
New-Item -ItemType Directory -Force -Path "tools" | Out-Null
$list | ConvertTo-Json -Depth 3 | Set-Content -Path "tools/mri-inventory.json" -Encoding UTF8
Write-Host ""
Write-Host "Saved: tools/mri-inventory.json"
