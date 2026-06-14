#!/usr/bin/env node

const { execSync } = require('child_process');

// §1.1 VIOLATION: parsing process.argv manually with non-POSIX syntax
const args = process.argv.slice(2);

// §10.1 VIOLATION: argument injection vulnerability — passing unsanitized user input as shell arguments
execSync(`git clone ${args[0]}`);