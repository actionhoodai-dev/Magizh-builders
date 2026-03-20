const { execSync } = require('child_process');
try {
  console.log('STATUS:\n', execSync('git status').toString());
  console.log('LOG:\n', execSync('git log -2 --oneline').toString());
} catch (e) {
  console.error('ERROR:\n', e.message);
}
