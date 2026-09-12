const fs = require('fs');
const path = require('path');

const dir = 'public/assets/images/ar/cases/mri';
const files = fs.readdirSync(dir);

console.log('Before:');
files.forEach(f => console.log(' -', f));

const renameMap = {
  '(MRI Brain - Sagittal View)..jpg': 'mri-brain-sagittal.jpg',
  'MRI & CT Thoracic Spine.jpg': 'mri-ct-thoracic-spine.jpg',
  'MRI Brain - Sagittal-T2FLAIR.jpg': 'mri-brain-sagittal-t2flair.jpg',
  'MRI Brain-T2-Weighted - Axial Views.jpg': 'mri-brain-t2-axial.jpg',
  'MRI CervicalThoracic Spine - T2 & T1 Post-Contrast..png': 'mri-cervicothoracic.png',
  'MRI Knee-Joint - Axial, Coronal, and Sagittal Views.jpg': 'mri-knee-joint.jpg',
  'MRI Shoulder Joint - Axial & Coronal Views).jpg': 'mri-shoulder-joint.jpg',
  'MRI-Thoracic Spine - Sagittal T2.jpg': 'mri-thoracic-spine-sagittal.jpg',
  'T1 و T2 (T1 vs T2 Weighted MRI Brain Analysil.jpg': 'mri-t1-vs-t2.jpg',
  'T1-T2-T1-vs T2-Weighted-MRI-Brain-Analysil.jpg': 'mri-t1-vs-t2-simple.jpg'
};

for (const [oldName, newName] of Object.entries(renameMap)) {
  const oldPath = path.join(dir, oldName);
  const newPath = path.join(dir, newName);
  if (fs.existsSync(oldPath)) {
    if (fs.existsSync(newPath)) fs.unlinkSync(newPath);
    fs.renameSync(oldPath, newPath);
    console.log(`✓ ${oldName} → ${newName}`);
  }
}

console.log('\nAfter:');
fs.readdirSync(dir).forEach(f => console.log(' -', f));

// Copy to en
const enDir = 'public/assets/images/en/cases/mri';
if (!fs.existsSync(enDir)) fs.mkdirSync(enDir, {recursive:true});
fs.readdirSync(dir).forEach(f => {
  fs.copyFileSync(path.join(dir,f), path.join(enDir,f));
});
console.log('\nCopied to en/');