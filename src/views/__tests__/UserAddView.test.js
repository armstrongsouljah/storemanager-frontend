import React from 'react';
import {shallow, mount} from 'enzyme';
import { UserAddView } from '../UserAddView';


const props = {
    open: false,
    onClose: jest.fn(),
    signupState: {
    success_message: '',
    
    },
    registerUser: jest.fn(),
}
const event = {
    preventDefault:jest.fn(),
    target: {
        id: '',
        value: '',
    }
}

describe('UserAddView', () => {
    it('should call on submit', () => {
      const wrapper = shallow(<UserAddView {...props} />)
      wrapper.instance().onSignup({
          preventDefault(){}
      })
      expect(wrapper.instance().props.registerUser).toBeCalled()
    })
    it('should call setState on select change', () => {
        const wrapper = shallow(<UserAddView {...props}/>)
        wrapper.instance().setState = jest.fn();
        
        wrapper.instance().onSelectChange(event)
        expect(wrapper.instance().setState).toBeCalled()
    })
    it('should call setState on change', () => {
        const wrapper = shallow(<UserAddView {...props}/>);
        wrapper.instance().setState = jest.fn();
        wrapper.instance().onChange(event);
        expect(wrapper.instance().setState).toBeCalled()
    })
})
