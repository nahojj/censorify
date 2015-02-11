var censoredWords = ['sad', 'bad', 'mad'];
var customCensoredWords = [];

function censor(inStr) {
	for (idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx], '****');
	}

	for (idx in customCensoredWords) {
		inStr.replace(customCensoredWords, '****');
	}
	return inStr;
}

function addCensoredWord(word) {
	customCensoredWords.push(word);
}

function getCensoredWors() {
	return censoredWords.concat(customCensoredWords);
}

// Required for node, access.
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWors = getCensoredWors;
