import App from "./App";
import {shallow} from 'enzyme';
import { findByTestAttr } from "../test/testUtils";


/**
 * Set function App component
 * @returns {shallowWrapper}
 */
const setup = () => {
    return shallow(<App/>)
}

test('renders without error' ,  ()  => {
    const wrapper = setup()
    const appComponent= findByTestAttr(wrapper , 'component-app')
    expect(appComponent).toHaveLength(1)
})