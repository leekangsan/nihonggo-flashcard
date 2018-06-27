var app = new Vue({
    el: '#app',
    data: {
        screen: 0,
        currentWord: null
    },
    methods: {
        /**
         * Update the current screen state of the app using a specified index.
         */
        goToScreen: function (screenIndex) {
            this.screen = screenIndex;
            onScreenChange(screenIndex);
        }
    }
});

/**
 * Handler for screen change event.
 * @param {*} screenIndex - The index of the next screen.
 */
function onScreenChange(screenIndex) {
    if (screenIndex == 1) {
        app.currentWord = nextWord();
    }
}

/**
 * Picks a random word from the vocabulary dictionary.
 */
function nextWord() {
    var dictionarySize = dictionary.length;
    var randomIndex = Math.floor(Math.random() * dictionarySize);
    return dictionary[randomIndex];
}

/**
 * Check whether the player's answer is included in the array of possible answers.
 * @param {*} dictionaryWord - the dictionary word to check.
 * @param {string} actualAnswer - the player's actual answer.
 */
function checkAnswer(dictionaryWord, actualAnswer) {
    // TODO: verify answer.
}
