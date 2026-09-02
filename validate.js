const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'package.json',
  'next.config.js',
  'tsconfig.json',
  'tailwind.config.ts',
  'middleware.ts',
  'app/layout.tsx',
  'app/[locale]/layout.tsx',
  'app/[locale]/page.tsx',
  'app/[locale]/contact/page.tsx',
  'lib/types/index.ts',
  'lib/config/index.ts',
  'lib/actions/contact.ts',
  'components/contact/ContactForm.tsx',
  'content/ar/products.ts',
  'content/en/products.ts',
];

let errors = 0;

for (const file of requiredFiles) {
  const fullPath = path.join(process.cwd(), file);
  if (!fs.existsSync(fullPath)) {
    console.error('❌ Missing: ' + file);
    errors++;
  } else {
    console.log('✅ Found: ' + file);
  }
}

if (errors === 0) {
  console.log('\n✅ All required files exist!');
  console.log('✅ Project structure is valid.');
  process.exit(0);
} else {
  console.error('\n❌ ' + errors + ' file(s) missing');
  process.exit(1);
}
