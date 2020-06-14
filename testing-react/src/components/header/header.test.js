import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr} from '../../testHelper';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("It should render without errors", () => {
    // const wrapper = component.find(`[data-test='header']`);
    const wrapper = findByTestAttr(component, "header");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = component.find(`[data-test='header']`);
    expect(logo.length).toBe(1);
  });
});
