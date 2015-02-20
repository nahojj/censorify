# My first Node.js package Module


## Usage

Create a filename.js file and do this

```javascript
var censor = require('censorify');

console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad and med text."));

censor.addCensoredWord("gloomy");

console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day."));
```

Then run:
```bash
$ node filename.js
```
