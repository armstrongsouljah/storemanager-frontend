import React from 'react';
import CornerMenu from '../CornerMenu';
import { shallow } from 'enzyme';


describe('<CornerMenu/>', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<CornerMenu/>)
        expect(wrapper).toMatchSnapshot()
    })
})