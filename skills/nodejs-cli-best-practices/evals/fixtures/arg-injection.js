#!/usr/bin/env node
const { execSync } = require('child_process');
const args = process.argv.slice(2);
// VULNERABLE: Argument injection
execSync(`git clone ${args[0]}`);