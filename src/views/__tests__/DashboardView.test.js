import React from "react";
import { shallow, } from "enzyme";
import {DashboardView} from '../DashboardView';
const props = {
    products: {
        length: 2,
    },
    getProducts: jest.fn(),
}

describe("<DashboardView/>", () => {
    it("should render without crashing", () => {
        const wrapper = shallow(<DashboardView {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
    it("should populate products on load", () => {
       const wrapper = shallow(<DashboardView {...props}/>);
       wrapper.instance().getProducts = jest.fn();
       wrapper.instance().getProducts()
       expect(wrapper.instance().props.products.length).toBeGreaterThan(0)
    });
    it("should should call setState on handleLogout", () => {
        const wrapper = shallow(<DashboardView {...props} />)
        wrapper.instance().handleLogout = jest.fn()
        wrapper.instance().handleLogout({
            preventDefault(){}
        })
        wrapper.instance().setState = jest.fn();
        global.confirm = jest.fn()
        global.confirm("are you sure")
        wrapper.instance().handleLogout({ preventDefault(){}})
        wrapper.instance().setState({redirect: true})

    })
    it('should show modal on showRegister', () => {
        const wrapper = shallow(<DashboardView {...props}/>);
        wrapper.instance().setState = jest.fn()
        wrapper.instance().showRegisterForm({
            preventDefault(){}
        })
        
        expect(wrapper.instance().setState).toBeCalled()
    })
    it('should setState on closeModal', () => {
        const wrapper = shallow(<DashboardView {...props}/>);
        wrapper.instance().setState = jest.fn()
        wrapper.instance().onCloseModal()
        expect( wrapper.instance().setState).toBeCalled()
    })
});
