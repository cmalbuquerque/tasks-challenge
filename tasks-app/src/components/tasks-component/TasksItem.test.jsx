import React from "react";
import ReactDOM from "react-dom";
import TasksItem from "./TasksItem";
import {configure, shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

it("render without crashing", () => {
    const div =document.createElement("div");
    ReactDOM.render(<TasksItem />, div);
});

it("render uncompleted task item correctly", () => {
    const wrapper = shallow(<TasksItem key={0} id={0} text="Task" state={false} />);
    const text = wrapper.find('div h4');    
    expect(text.text()).toBe("Task ");
});

it("render completed task item correctly", () => {
    const wrapper = shallow(<TasksItem key={1} id={1} text="Task 1" state={true} />);
    const text = wrapper.find('div h4');    
    expect(text.text()).toBe("Task 1 <FcApproval />");
});