import  {shallow} from 'enzyme';
import { checkProps, findByTestAttr } from '../test/testUtils';
import Input from './Input';


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

test('renders without error' , () => {
  const wrapper = setup()
  const component = findByTestAttr(wrapper , 'component-input')
  expect(component.length).toBe(1)
  
})

test('Does not throw warning with expected props' , () => {
    checkProps(Input, {secretWord : "party"})
})


