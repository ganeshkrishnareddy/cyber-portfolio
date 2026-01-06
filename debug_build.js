const { exec } = require('child_process');
const fs = require('fs');
exec('npm run build', { maxBuffer: 1024 * 1024 * 10 }, (error, stdout, stderr) => {
    fs.writeFileSync('build_output.txt', 'STDOUT:\n' + stdout + '\n\nSTDERR:\n' + stderr);
    console.log('Done');
});
