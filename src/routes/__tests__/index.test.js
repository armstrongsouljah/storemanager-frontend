import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../index';

describe('<Routes/>', () => {
    it("renders wtihout crashing", () => {
        const wrapper = shallow(<Routes/>);
        expect(wrapper).toMatchSnapshot();
    })
})
