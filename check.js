const fs = require('fs');
const cp = require('child_process');

try {
    const log = cp.execSync('git log -n 5').toString();
    fs.writeFileSync('log.utf8.txt', log, 'utf8');

    const status = cp.execSync('git status --porcelain').toString();
    fs.writeFileSync('status.utf8.txt', status, 'utf8');
} catch (e) {
    console.error(e);
}
