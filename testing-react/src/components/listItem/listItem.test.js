import React from 'react';
import { shallow } from "enzyme";
import { findByTestAttr } from './../../testHelper';
import checkPropTypes from "check-prop-types";
import ListItem from "./index";

describe("ListItem component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Example Title", 
        desc: "Some text"
      };
      const propsErrors = checkPropTypes(ListItem.propTypes, expectedProps, "props", ListItem.name);
      expect(propsErrors).toBe(undefined); 
    });

  });

  describe("Component Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "hello, title", 
        desc: "hello, desc"
      };

      wrapper = shallow(<ListItem {...props}></ListItem>)
    });

    it("Should render without errors", () => {
      const list = findByTestAttr(wrapper, "listitem");
      expect(list.length).toBe(1);
    });


    it("Should render a title", () => {
      const title = findByTestAttr(wrapper, "title");
      expect(title.length).toBe(1);
    });

    it("Should render a desc", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });

  });

});