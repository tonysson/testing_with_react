
/**
 * @method getLetterMatchCount
 * @param {string} guessedWord 
 * @param {string} secretWord 
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
 export const getLetterMatchCount = (guessedWord , secretWord) => {
        const secretLetters = secretWord.split('')
        const guessedLetterSet = new Set(guessedWord)
        return secretLetters.filter(letter => guessedLetterSet.has(letter)).length
}

