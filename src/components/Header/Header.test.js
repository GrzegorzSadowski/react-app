import React from "react";
import renderer from "react-test-renderer"
import Header from "./Header";
import Name from "../Name/Name";
import {shallow, configure} from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"

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