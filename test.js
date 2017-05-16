'use strict';

const humanpass = require('./index');

// Generate a password:
let password = humanpass();
console.log(`New password: ${password}\n`);

// Generate a list of (e.g., 10) passwords:
let n = 10;
let passwords = humanpass.generatePasswords(10);
console.log(`${n} more new passwords:`);
passwords.forEach(password => {
	console.log(`  ${password}`);
});

