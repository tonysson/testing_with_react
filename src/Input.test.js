import React from 'react'
import  {shallow} from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import Input from './Input';

  // mock the useState with destructuring
    //    const mockSetCurrentGuess = jest.fn()
    //     jest.mock('react' , () => ({
    //         ...jest.requireActual('react'),
    //         useState : (initialState => [initialState , mockSetCurrentGuess])
    //     }))


/**
 * Factory function to create a shallowWrapper for the GuessWords component.
 * @function setup
 * @param {object} props - 
 * @returns {ShallowWrapper}
 */


const setup = (secretWord = "party") => {
    // const setupProps = {...defaultProps , ...props}
    return shallow(<Input secretWord={secretWord} />)
}

describe('state controlled field' , () => {

    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    let originalUseState


    beforeEach(() => {
          // if we dont destructure useState
          mockSetCurrentGuess.mockClear()
          originalUseState = React.useState
          React.useState = () => ["" , mockSetCurrentGuess]
          wrapper = setup()
    })

    // clear the previous usestate
    afterEach(() => {
        React.useState = originalUseState
    })
    
    test('state updates with value of input-box change' , () => {

        const inputBox = findByTestAttr(wrapper , 'input-box')

        // mock change event : 
        const mockEvent = {target : {value : 'train'}}
        inputBox.simulate("change" , mockEvent)
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    })

    test('field is cleared upon submit button click' , () => {
        const submitButton = findByTestAttr(wrapper , 'submit-button')
        submitButton.simulate("click" , {preventDefault(){}})
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
    })
})




test('renders without error' , () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper , 'component-input')
  expect(component.length).toBe(1)
  
})

test('Does not throw warning with expected props' , () => {
    checkProps(Input, {secretWord : "party"})
})


