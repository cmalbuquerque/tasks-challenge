import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

it("render home without crashing", () => {
    const div =document.createElement("div");
    ReactDOM.render(<Home />, div);
});

it("render text correctly", () => {
    const wrapper = shallow(<Home />);
    const text = wrapper.find('div h2');    
    expect(text.text()).toBe("Hello World");
});