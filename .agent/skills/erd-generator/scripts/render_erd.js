const { execFile } = require('child_process');
const path = require('path');

const input = path.resolve('docs/architecture/schema.mmd');
const output = path.resolve('docs/architecture/erd.svg');

execFile(
    'npx',
    ['mmdc', '-i', input, '-o', output],
    (error, stdout, stderr) => {
        if (error) {
            console.error(`SYNTAX_ERROR: ${stderr}`);
            process.exit(1);
        }

        console.log('SUCCESS');
        process.exit(0);
    },
);