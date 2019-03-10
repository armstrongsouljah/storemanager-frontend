import React from "react";
import { shallow, } from "enzyme";
import DashboardView, {DashboardView as A2} from '../DashboardView';
const props = {
    products: {
        length: 2,
    },
    getProducts: jest.fn(),
}

describe("<DashboardView/>", () => {
    it("should render without crashing", () => {
        const wrapper = new DashboardView(props);
        expect(wrapper).toMatchSnapshot();
    });
    it("should populate products on load", () => {
       const wrapper = shallow(<A2 {...props}/>);
       wrapper.instance().getProducts = jest.fn();
       wrapper.instance().getProducts()
       expect(wrapper.instance().props.products.length).toBeGreaterThan(0)
    });
    it("should should call setState on handleLogout", () => {
        const wrapper = shallow(<A2 {...props} />)
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
});
