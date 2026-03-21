const fs = require('fs');
const filePath = 'c:\\Users\\ELCOT\\OneDrive\\Desktop\\MAGIZH-BUILDERS\\src\\components\\Navbar.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

const target = `                                    className={cn(
                                        "text-[12.5px] uppercase tracking-[0.4em] font-bold transition-all hover:text-accent flex items-center gap-2",
                                        scrolled
                                            ? (pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href ? "text-primary" : "text-primary/60")
                                            : (pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href ? "text-white" : "text-white/70")
                                    )}`;

const replacement = `                                    className={cn(
                                        "text-[12.5px] uppercase tracking-[0.4em] font-bold transition-all hover:text-accent flex items-center gap-2",
                                        pathname.startsWith(link.href) && link.href !== '/' || pathname === link.href ? "text-primary" : "text-primary/60"
                                    )}`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
} else {
  // Use regex/anchor replacement
  const anchor = '"text-[12.5px] uppercase tracking-[0.4em] font-bold transition-all hover:text-accent flex items-center gap-2"';
  const index = content.indexOf(anchor);
  if (index !== -1) {
    const rest = content.slice(index);
    const scrolledIndex = rest.indexOf('scrolled');
    const closeParenIndex = rest.indexOf(')}', scrolledIndex);
    const final = content.slice(0, index + anchor.length + 1) + ',\n                                        pathname.startsWith(link.href) && link.href !== \'/\' || pathname === link.href ? "text-primary" : "text-primary/60"\n                                    ' + rest.slice(closeParenIndex);
    content = final;
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Applied Navbar styles styles');
