const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function run(dir){
  for(const e of fs.readdirSync(dir,{withFileTypes:true})){
    const p = path.join(dir,e.name);
    if(e.isDirectory()){
      await run(p);
    } else if(/\.jpe?g$/i.test(e.name)){
      const size = fs.statSync(p).size;
      if(size > 300*1024){
        console.log('بضغط', e.name, Math.round(size/1024/1024*10)/10 + 'MB');
        const tmp = p + '.tmp.jpg';
        await sharp(p).jpeg({ quality: 70, mozjpeg: true }).toFile(tmp);
        fs.renameSync(tmp, p);
      }
    }
  }
}

run('./public').then(()=>console.log('✅ خلصنا ضغط كل الصور!'));