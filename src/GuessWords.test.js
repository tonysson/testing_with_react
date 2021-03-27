import  {shallow} from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import GuessWords from './GuessWords';

const defaultProps = {
    guessedWords : [
        {
            guessWord : "train",
            letterMatch : 3
        }
    ]
};

/**
 * Factory function to create a shallowWrapper for the GuessWords component.
 * @function setup
 * @param {object} props - 
 * @returns {ShallowWrapper}
 */


const setup = (props={}) => {
    const setupProps = {...defaultProps , ...props}
    return shallow(<GuessWords {...setupProps}  />)
}


describe('if there are no word guessed' , () => {

    let wrapper ;

    beforeEach(() => {
        wrapper = setup({guessedWords:[]});
    })
   
    test('renders without error' , () => {
       const component = findByTestAttr(wrapper , 'component-guessed-words')
       expect(component.length).toBe(1)
    })

    test('renders instructions to guess word' , () => {
        const instruction = findByTestAttr(wrapper , 'guessed-instruction')
        expect(instruction.text().length).not.toBe(0)
    })
})


describe('if there are words guessed' , () => {

    let wrapper ;

   const  guessedWords = [
        {guessWord: 'train' , letterMatchCount : 3},
        {guessWord: 'agile' , letterMatchCount : 1},
        {guessWord: 'party' , letterMatchCount : 3}
    ]

    beforeEach(() => {
       wrapper = setup({guessedWords})
    })

     test('renders without error' , () => {
       const component = findByTestAttr(wrapper , 'component-guessed-words')
       expect(component.length).toBe(1)
    })

    test('renders guessed words section' , () => {
        const guessedWordsNode = findByTestAttr(wrapper , "guessed-words")
        expect(guessedWordsNode.length).toBe(1)
    })

    test('renders correct number of guessed words' , () => {
         const guessedWordsNodes = findByTestAttr(wrapper , "guessed-word")
        expect(guessedWordsNodes.length).toBe(guessedWords.length)
    })
})


test('does not throw warning with expected props' , () => {
    checkProps(GuessWords , defaultProps)
})








