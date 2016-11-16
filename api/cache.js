/**
 * @cache Used to cache the data from the db for faster and easier workflow
 * It wont work corretly with multiple apps. If we want multiple apps for
 * back-end we wont be able to cache the info for skiping database calls
 */
(function() {
    var words = [];
    /**
     * @getWords it returns all of the words that are currently cached
     */
    function getWords() {
        return words;
    }
    /**
     * @setWords it sets words to the cache
     * @newUsers <Word[]> the new words array
     */
    function setWords(newWords) {
        words = newWords;
    }

    module.exports = {
        getWords: getWords,
        setWords: setWords
    };
}());
