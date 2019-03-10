import React from "react";
import { shallow, } from "enzyme";
import Dashboard from "../Dashboard";

const props = {
    products: [],
}

describe("<Dashboard />", () => {
    it("should render without crashing", () => {
        const wrapper = shallow(<Dashboard {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
