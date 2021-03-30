import React  from 'react';
import PropTypes from 'prop-types';


const Input = ({secretWord , success}) => {

    // state
    const [currentGuess , setCurrentGuess] = React.useState("")

    const handleClick = (e) => {
        e.preventDefault()
        setCurrentGuess('')
    }

    return (
        <div data-test="component-input">
            <form className="form-inline">
                <input 
                onChange={(event) => setCurrentGuess(event.target.value)}
                value={currentGuess}
                placeholder="enter guess"
                type="text"
                data-test="input-box" 
                className="mb-2 mx-sm-3"/>
                <button
                onClick={handleClick}
                data-test="submit-button"
                className="btn btn-primary mb-2" >
                    Submit
                </button>
            </form>
        </div>
    )
}

Input.prototype = {
    secretWord : PropTypes.string.isRequired
}

export default Input

