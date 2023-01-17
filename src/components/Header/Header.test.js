import React, {useState} from "react";
import renderer from "react-test-renderer"
import Header from "./Header";
import Name from "../Name/Name";
import {shallow, mount, configure, render} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import AddMovie from "../AddMovie/AddMovie";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';







test("Snapshot test when showButton is false", () =>{
    const tree = renderer.create(<Header showButton={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test("Snapshot test when showButton is true", () =>{
    const tree = renderer.create(<Header showButton={true}/>).toJSON();
    expect(tree).toMatchSnapshot();
})

configure({adapter: new Adapter()});

describe("rendrening components", () => {

it("show modal window after ADD MOVIE button is clicked", () =>
{
const component = shallow(<Header showButton={true}/>);
const button = component.find(".header--button");
expect(component.find("AddMovie").exists()).toBeFalsy;
button.simulate("click");
expect(component.find("AddMovie").exists()).toBeTruthy;
});





it("close modal window after close modal button is clicked", () =>
{   
const handleCloseModalClick = jest.fn()

const component = shallow(<Header showButton={true} />);
expect(component.find("AddMovie").exists()).toEqual(false);
const button = component.find(".header--button");
button.simulate("click");

expect(component.find("AddMovie").exists()).toEqual(true);
const modalButton = component.find("#modal--button");
modalButton.simulate('click');
expect(handleCloseModalClick).toHaveBeenCalledTimes(1);

});









it("renders Header component Name withput crashing", () =>
{
const wrapper = shallow(<Header/>);
expect(wrapper.contains(<Name/>)).toEqual(true);
});
})

describe("passing props", ()=>{
it("show button ADD MOVIE if showButton is true", () =>
{
const component = shallow(<Header showButton={true}/>);
expect(component.find(".header--button").exists()).toBeTruthy;
});

})