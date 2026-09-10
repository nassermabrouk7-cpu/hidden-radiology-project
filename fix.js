const fs = require('fs');
let p = 'content/ar/cases.ts';
let c = fs.readFileSync(p,'utf8');

// شيل أي فواصل فاضية بتعمل undefined
c = c.replace(/,\s*,\s*\n/g, ',\n');
c = c.replace(/,\s*\n\s*,/g, ',\n');
c = c.replace(/\n\s*\n\s*,/g, ',\n');
c = c.replace(/,\s*,/g, ',');

// شيل أي سطر فاضي بين العناصر فيه فاصلة لوحده
c = c.replace(/\n\s*,\s*\n\s*\]/g, '\n]');

fs.writeFileSync(p,c,'utf8');
console.log('Cleaned commas');

// اطبع أول 3 أسطر من المنطقة اللي فيها المشكلة
let lines = c.split('\n');
for(let i=55; i<65; i++){
  console.log(i+1 + ':', lines[i]);
}