import { cpSync, rmSync } from 'fs';

cpSync('docs/browser', 'docs', { recursive: true });
rmSync('docs/browser', { recursive: true, force: true });
