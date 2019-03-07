/* eslint-disable import/no-named-as-default */
import React from "react";
import { shallow, } from "enzyme";
import App, { App as App2, } from "../App";

const props = {
    loginState: {
        userRole: null,
        token: null,
        successMessage: null,
        errors: null,
    },
    loginAction: jest.fn(),
};

describe("App", () => {
    it("renders without crashing", () => {
        const wraper = new App(props);
        expect(wraper).toMatchSnapshot();
    });
    it("should set state onChange", () => {
        const wrapper = shallow(<App2 {...props} />);
        wrapper.instance().setState = jest.fn();
        const event = {
            target: {
                id: "",
            },
            preventDefault: jest.fn(),
        };
        wrapper.instance().onChange(event);
        expect(wrapper.instance().setState).toBeCalled();
    });
    it("should call loginAction on handleSubmit", () => {
        const wrapper = shallow(<App2 {...props} />);
        wrapper.instance().handleSubmit({ preventDefault() {}, });
        expect(wrapper.instance().props.loginAction).toBeCalled();
    });
    it("should handleIsAuthenticated on component will receive props", () => {
        const instance = new App2(props);
        instance.handleIsAuthenticated = jest.fn();
        instance.setState = jest.fn();
        instance.componentWillReceiveProps(props);
        expect(instance.handleIsAuthenticated).toBeCalled();
    });
});
