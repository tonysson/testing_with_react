import  {shallow} from 'enzyme';
import Congrats from './Congrats';
import { checkProps, findByTestAttr } from '../test/testUtils';



const defaultProps = {success : false}

/** 
 * Factory function to create a shallowWrapper for the congrats component
 * @function setup
 * @param {object} props -component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps , ...props}
    return shallow(<Congrats {...setupProps}  />)
}


test('render without error' , () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper , 'component-congrats')
    expect(component.length).toBe(1)
})

test('renders no text when success props is false', () => {
    const wrapper = setup({success : false})
    const component = findByTestAttr(wrapper , 'component-congrats')
    expect(component.text()).toBe('')
})

test('renders non-empty congrats message when the `success` props is true' , () => {
    const wrapper = setup({success : true})
    const message = findByTestAttr(wrapper , 'congrats-message')
    expect(message.text().length).not.toBe(0)
})

test('Does not throw warning with expected props' , () => {
    const expectedProps = {success : false}
    checkProps(Congrats , expectedProps)
})

