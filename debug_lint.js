const { exec } = require('child_process');
const fs = require('fs');
exec('npx eslint .', (error, stdout, stderr) => {
    fs.writeFileSync('lint_debug_full.txt', stdout + '\n' + stderr);
    console.log('Done');
});
