const fs = require('fs');
const filePath = 'c:\\Users\\ELCOT\\OneDrive\\Desktop\\MAGIZH-BUILDERS\\src\\components\\Navbar.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

const anchor = 'Explore All Services';
const index = content.indexOf(anchor);

if (index !== -1) {
  const rest = content.slice(index);
  const motionCloseIndex = rest.indexOf('</motion.div>');
  const final = content.slice(0, index + motionCloseIndex) + '\n                                                             </div>' + content.slice(index + motionCloseIndex);
  fs.writeFileSync(filePath, final, 'utf-8');
  console.log('Fixed tag with offset');
} else {
  console.log('Explore All Services not found');
}
