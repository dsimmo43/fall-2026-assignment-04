import { execFile } from 'node:child_process';
import path from 'node:path';

const input = path.resolve(process.argv[2] || 'docs/architecture/schema.mmd');
const output = path.resolve('docs/architecture/erd.svg');

const env = {
    ...process.env,
    LD_LIBRARY_PATH: process.env.LD_LIBRARY_PATH
        ? `/home/dereansim/.local/lib:${process.env.LD_LIBRARY_PATH}`
        : '/home/dereansim/.local/lib',
};

execFile(
    'npx',
    ['mmdc', '-i', input, '-o', output],
    { env },
    (error, stdout, stderr) => {
        if (error) {
            console.error(`SYNTAX_ERROR: ${stderr}`);
            process.exit(1);
        }

        console.log('SUCCESS');
        process.exit(0);
    },
);
