'use strict';

const wordList = require('./word-list.json');
const wordCount = wordList.length;

const tweaks = {
	a: '@',
	b: '&',
	c: '(',
	d: ')',
	e: '[',
	f: '=',
	g: '%',
	h: '#',
	i: '!',
	j: ';',
	k: '{',
	l: ']',
	m: '^',
	n: '~',
	o: '*',
	p: '>',
	q: '<',
	r: '}',
	s: '$',
	t: '+',
	u: '_',
	v: '-',
	w: '"',
	x: ':',
	y: ',',
	z: '`',
};

const getRandomWord = () => {
	return wordList[Math.floor(Math.random() * wordCount)];
};

const tweakWord = word => {
	const i = Math.floor(Math.random() * (word.length - 1)) + 1;
	return word.substr(0, i) + tweaks[word.charAt(i)] + word.substr(i + 1);
};

const capitalizeWord = word => {
	return word.charAt(0).toUpperCase() + word.substr(1);
};

const getRandomDigits = count => {
	let digits = '';
	while (--count >= 0) {
		digits += String(Math.floor(Math.random() * 10));
	}
	return digits;
};

const generatePassword = () => {
	let words = [getRandomWord()];
	do {
		words[1] = getRandomWord();
	} while (words[0] === words[1]);

	// tweak random word
	let i = Math.floor(Math.random() * 2);
	words[i] = tweakWord(words[i]);

	// sometimes capitalize first word
	if (Math.random() > 0.6) {
		words[0] = capitalizeWord(words[0]);
	}

	// always capitalize second word
	words[1] = capitalizeWord(words[1]);

	return words.join('') + getRandomDigits(2);
};

const generatePasswords = count => {
	let passwords = [];
	while (--count >= 0) {
		passwords.push(generatePassword());
	}
	return passwords;
};

module.exports = generatePassword;
module.exports.generatePasswords = generatePasswords;

