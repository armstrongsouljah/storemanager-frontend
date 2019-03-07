import React from "react";
import { shallow, } from "enzyme";
import TextInput from "../TextInput";

const props = {
    onChange: jest.fn(),
    id: "",
    labelText: "",
    type: "",
};

describe("<TextInput/>", () => {
    it("Should render without crashing", () => {
        const wrapper = shallow(<TextInput {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
