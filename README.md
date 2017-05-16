humanpass
=========

Passwords for humans

Abstract
--------

This is a small node library to generate semi-ok passwords for pragmatic human use. Each password is formed by combining two medium-length common words and randomly tweaking them. The resulting password will be memorable while containing characters of each class: lowercase, uppercase, digits, symbol.

This library is NOT meant to generate very strong passwords. The author does not guarantee security, safety, nor anything else. Please always consider what you are protecting when generating a password, and understand that different contexts may necessitate different levels of security and convenience, the two of which are usually at odds with each other.

Examples
--------

```
  Pro*fBoats14
  whichBoat!ng78
  dramaticTea(h82
  Dir[ctedShepherd86
  a+hleticEngine66
  FormingSold!er59
```

Usage
-----

Require the module:

```
const humanpass = require('./index');
```

Generate a password:

```
let password = humanpass();
console.log(`New password: ${password}`);
```

Generate a list of (e.g., 10) passwords:

```
let passwords = humanpass.generatePasswords(10);
console.log(passwords);
```

License
-------

This library is made freely available for use under the [MIT License](LICENSE).

The word list was sourced from the filtered list of medium-length swear-free words provided in the GitHub repository [first20hours/google-1000-english](https://github.com/first20hours/google-10000-english). These were in turn yielded from the [Google Books Ngram Viewer](https://books.google.com/ngrams).
