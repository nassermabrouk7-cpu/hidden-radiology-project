$ErrorActionPreference = "Stop"

$Project = (Get-Location).Path
$Library = "E:\HiddenRadiology_Library"
$ProjectPublic = Join-Path $Project "public\images\ar\products"
$WebRoot = Join-Path $Library "05_Brand_Assets\Project_Web"

if (!(Test-Path $Library)) { throw "Library not found: $Library" }

# Create the project-compatible library structure
$dirs = @(
    (Join-Path $WebRoot "ar\products"),
    (Join-Path $WebRoot "en\products"),
    (Join-Path $Library "01_Raw_Images\A_Xray"),
    (Join-Path $Library "01_Raw_Images\B_CT"),
    (Join-Path $Library "01_Raw_Images\C_MRI"),
    (Join-Path $Library "04_Graphics_Illustrations\Project_Covers")
)
$dirs | ForEach-Object { New-Item -ItemType Directory -Force -Path $_ | Out-Null }

# Image inventory: library only, excluding the web-copy folder itself
$files = Get-ChildItem $Library -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object {
        $_.FullName -notlike "$WebRoot*" -and
        $_.Extension.ToLower() -in @(".jpg",".jpeg",".png",".webp",".gif",".bmp",".tif",".tiff")
    }

# SHA-256 de-duplication for the source inventory
$hashes = @{}
$unique = New-Object System.Collections.Generic.List[object]
foreach ($f in $files) {
    try {
        $h = (Get-FileHash -Algorithm SHA256 -LiteralPath $f.FullName).Hash
        if (!$hashes.ContainsKey($h)) {
            $hashes[$h] = $true
            $unique.Add($f)
        }
    } catch {}
}

function Get-Image([string[]]$patterns) {
    foreach ($pat in $patterns) {
        $hit = $unique |
            Where-Object { $_.Name -match $pat } |
            Sort-Object Length -Descending |
            Select-Object -First 1
        if ($hit) { return $hit }
    }
    return $null
}

$map = @(
    @{ Name="ct-cover.jpg";  Patterns=@("(?i)\bct\b","computed.?tomography","cat.?scan") },
    @{ Name="cxr-cover.jpg"; Patterns=@("cxr","chest.?x.?ray","x.?ray","radiograph") },
    @{ Name="mri-cover.jpg"; Patterns=@("(?i)\bmri\b","magnetic.?resonance","mr.?scan") },
    @{ Name="qs-cover.jpg";  Patterns=@("quality.?safety","quality","safety") },
    @{ Name="rs-cover.jpg";  Patterns=@("radiology.?safety","radiation.?safety","radiology") }
)

$copied = 0
$missing = @()

foreach ($item in $map) {
    $src = Get-Image $item.Patterns
    $destLibrary = Join-Path $WebRoot ("ar\products\" + $item.Name)
    $destProject = Join-Path $ProjectPublic $item.Name

    if ($src) {
        Copy-Item -LiteralPath $src.FullName -Destination $destLibrary -Force
        New-Item -ItemType Directory -Force -Path $ProjectPublic | Out-Null
        Copy-Item -LiteralPath $src.FullName -Destination $destProject -Force
        $copied++
        Write-Host "OK  $($item.Name) <= $($src.FullName)"
    } else {
        $missing += $item.Name
        Write-Host "MISS $($item.Name)"
    }
}

# Also create a machine-readable inventory for the site/library
$inventoryPath = Join-Path $WebRoot "library-inventory.json"
$inventory = [ordered]@{
    generated = (Get-Date).ToString("s")
    source = $Library
    uniqueImageCount = $unique.Count
    projectProductCovers = $map.Name
    copiedCovers = $copied
    missingCovers = $missing
}
$inventory | ConvertTo-Json -Depth 5 | Set-Content -Encoding UTF8 $inventoryPath

Write-Host ""
Write-Host "DONE"
Write-Host "Unique images in library: $($unique.Count)"
Write-Host "Product covers linked: $copied"
if ($missing.Count -gt 0) {
    Write-Host "Still missing: $($missing -join ', ')"
} else {
    Write-Host "All five product images are now present in public\images\ar\products"
}
Write-Host "Project: $Project"
Write-Host "Library: $Library"
