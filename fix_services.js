const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\ELCOT\\OneDrive\\Desktop\\MAGIZH-BUILDERS\\src\\app\\services';
const subdirs = ['approvals', 'construction', 'consulting', 'drawings', 'interior'];

subdirs.forEach(s => {
  const file = path.join(dir, s, 'page.tsx');
  if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      content = content.replace(/<p className="([^"]+)"/g, (match, classes) => {
          if (!classes.includes('text-justify') && !classes.includes('text-center') && !classes.includes('text-right')) {
              return `<p className="${classes} text-justify"`;
          }
          return match;
      });
      content = content.replace(/<p>/g, '<p className="text-justify">');
      fs.writeFileSync(file, content);
      console.log('Updated:', file);
  } else {
      console.log('Not found:', file);
  }
});
