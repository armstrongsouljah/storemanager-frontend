import React from 'react'; 
import { shallow } from 'enzyme';

import UserForm from '../UserForm';

describe('USerForm', () => {
    it('renders wtihout crashing', () => {
        const wrapper = shallow(<UserForm/>);
        wrapper.setProps({
            errors:'',
            successMessage:''
        })
        expect(wrapper).toMatchSnapshot()
    })
})
