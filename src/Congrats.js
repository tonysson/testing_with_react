import React from 'react';
import PropTypes from 'prop-types'

/**
 * @function
 * @param {object} props React props 
 * @returns {JSX.Element} - Rendered component (or null if `success` is false)
 */
const Congrats = ({success}) => {
    return (
     success ?  (
          <div data-test="component-congrats" className="alert alert-success">
            <span data-test="congrats-message">
                Congratulation ! You guess the world
            </span>
        </div>
     ) : (
          < div data-test="component-congrats" />
     )
    )
}

Congrats.propTypes ={
   success: PropTypes.bool.isRequired
}

export default Congrats
