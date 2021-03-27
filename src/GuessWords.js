import React from 'react'
import PropTypes from 'prop-types';


const GuessWords = ({guessedWords}) => {

    let contents;


    if(guessedWords && guessedWords.length === 0){
        contents = (
            <span data-test ="guessed-instruction">
                Try to guess the secret word! 
            </span>
        )
    }else{
        let guessedWordRow = guessedWords.map((word , index) => (
            <tr key={index} data-test="guessed-word">
                <td >
                    {word.guessedWord}
                </td>
                 <td>
                    {word.letterMatchCount}
                </td>
            </tr>
        ))
        contents = (
           <div data-test="guessed-words" >
               <h3 className="text-center m-5">
                   Guessed Words
               </h3>
               <table className="table table-light table-striped">
                   <thead className="thead-light">
                       <tr>
                           <th>Guess</th>
                           <th>Matching Letters</th>
                      </tr>
                   </thead>
                   <tbody>
                       {guessedWordRow}
                   </tbody>
               </table>
           </div>
        )
    }

    return (
       
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}

// array of object
GuessWords.prototypes = {
   guessedWords : PropTypes.arrayOf(
       PropTypes.shape({
           guessWord : PropTypes.string.isRequired , 
           letterMatchCount : PropTypes.number.isRequired
       })
   ).isRequired
}

export default GuessWords
