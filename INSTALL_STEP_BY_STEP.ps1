Write-Host "=== Hidden Radiology Installer - Step by Step ===" -ForegroundColor Green

# Step 1: Go to project folder
Set-Location "E:\hidden-radiology-v2"
Write-Host "[1/5] Current folder: $(Get-Location)" -ForegroundColor Yellow

# Step 2: Create folders
Write-Host "[2/5] Creating folders..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "src\data" | Out-Null
New-Item -ItemType Directory -Force -Path "public\assets\images\en\cases\mri" | Out-Null
New-Item -ItemType Directory -Force -Path "public\assets\images\ar\cases\ct" | Out-Null

# Step 3: Copy images to EN folder (if they exist)
Write-Host "[3/5] Copying approved MRI images to EN folder..." -ForegroundColor Yellow
$files = @(
    "public\assets\images\ar\cases\mri\MRI Brain-T2-Weighted - Axial Views.jpg",
    "public\assets\images\ar\cases\mri\MRI CervicalThoracic Spine - T2 & T1 Post-Contrast..png",
    "public\assets\images\ar\cases\mri\MRI & CT Thoracic Spine.jpg"
)
foreach ($f in $files) {
    if (Test-Path -LiteralPath $f) {
        Copy-Item -LiteralPath $f -Destination "public\assets\images\en\cases\mri\" -Force
        Write-Host "  Copied: $f" -ForegroundColor Green
    } else {
        Write-Host "  NOT FOUND: $f" -ForegroundColor Red
    }
}

# Step 4: Create the approved cases file
Write-Host "[4/5] Creating src\data\mri-cases.approved.ts ..." -ForegroundColor Yellow
$code = @'
export const approvedMriCases = [
  {
    id: "mri-brainstem-pons-01",
    slug: "brainstem-pontine-lesion-t2",
    modality: "MRI",
    region: "brain",
    image: "/assets/images/ar/cases/mri/MRI Brain-T2-Weighted - Axial Views.jpg",
    title_ar: "آفة جذع الدماغ الخفية - البؤرة الجسرية على T2",
    title_en: "Hidden Brainstem Lesion - Subtle Pontine Focus on T2",
    findings_ar: "بؤرة صغيرة عالية الإشارة في المنطقة الظهرية للـ pons، محددة بالسهم في الصور المكبرة. لا يوجد تأثير كتلي كبير.",
    findings_en: "Small hyperintense focus in dorsal pons, marked by arrow on magnified views. No significant mass effect.",
    hiddenSign_ar: "موقعها في جذع الدماغ - سهلة الإغفال بدون تكبير ومراجعة منهجية.",
    hiddenSign_en: "Location in brainstem - easily overlooked without magnification and systematic review.",
    interpretation_ar: "مواصفات متوافقة مع آفة داخل محورية صغيرة. الانطباع التعليمي suggestive of بؤرة التهابية صغيرة.",
    interpretation_en: "Findings compatible with small intra-axial focus. Educational impression suggestive of small inflammatory focus.",
    difficulty: "Advanced",
    status: "APPROVED"
  },
  {
    id: "mri-cord-cervicothoracic-01",
    slug: "cervicothoracic-cord-lesion-enhancement",
    modality: "MRI",
    region: "spine",
    image: "/assets/images/ar/cases/mri/MRI CervicalThoracic Spine - T2 & T1 Post-Contrast..png",
    title_ar: "آفة الحبل الرقبي الصدري - التباين يكشف الخفي",
    title_en: "Cervicothoracic Cord Lesion - Contrast Reveals the Hidden",
    findings_ar: "T2: بؤرة عالية الإشارة داخل الحبل. T1 بعد الصبغة: تعزيز بؤري خفيف في نفس الموقع.",
    findings_en: "T2: Intramedullary hyperintense focus. T1 post-contrast: Subtle focal enhancement at same level.",
    hiddenSign_ar: "وجود التعزيز بعد الصبغة يغير التفريق بين التهاب وورم.",
    hiddenSign_en: "Presence of enhancement changes differential between inflammation and tumor.",
    interpretation_ar: "مواصفات compatible with آفة داخل الحبل مع تعزيز. يرجح التهاب نخاع أو آفة مزيلة للميالين.",
    interpretation_en: "Findings compatible with intramedullary lesion with enhancement. Favors myelitis or demyelinating lesion.",
    difficulty: "Advanced",
    status: "APPROVED"
  },
  {
    id: "mri-thoracic-extramedullary-01",
    slug: "thoracic-intradural-extramedullary-mass",
    modality: "MRI",
    region: "spine",
    image: "/assets/images/ar/cases/mri/MRI & CT Thoracic Spine.jpg",
    title_ar: "كتلة خارج الحبل داخل الأم الجافية",
    title_en: "Intradural Extramedullary Mass",
    findings_ar: "كتلة مستديرة خلف الحبل الصدري تدفع الحبل للأمام وتضغطه.",
    findings_en: "Rounded mass posterior to thoracic cord displacing cord anteriorly.",
    hiddenSign_ar: "التمييز بين داخل الحبل وخارجه - وجود فاصل CSF حول الكتلة.",
    hiddenSign_en: "Intramedullary vs extramedullary - CSF cleft around mass.",
    interpretation_ar: "مواصفات suggestive of كتلة intradural extramedullary - compatible with meningioma.",
    interpretation_en: "Features suggestive of intradural extramedullary mass - compatible with meningioma.",
    difficulty: "Intermediate",
    status: "APPROVED"
  }
];
'@

$code | Set-Content -Path "src\data\mri-cases.approved.ts" -Encoding UTF8
Write-Host "  Created: src\data\mri-cases.approved.ts" -ForegroundColor Green

# Step 5: Test build
Write-Host "[5/5] Testing build... please wait 30 seconds" -ForegroundColor Yellow
Write-Host "Done! Now you can run: npm run build" -ForegroundColor Green
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "SUCCESS - 3 cases ready!" -ForegroundColor Green
Write-Host "File saved at: src\data\mri-cases.approved.ts" -ForegroundColor Cyan
Write-Host "Images copied to: public\assets\images\en\cases\mri\" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
pause
