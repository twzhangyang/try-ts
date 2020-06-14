import React from "react";
import { shallow } from "enzyme";
import HeadLine from "./index";
import { findByTestAttr } from "./../../testHelper";
import checkPropTypes from 'check-prop-types';

const setUp = (props = {}) => {
  const componenet = shallow(<HeadLine {...props}></HeadLine>);
  console.log(componenet.debug());
  return componenet;
};

describe("Headline componenet", () => {

  describe("checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test desc",
        tempArray: [{
          fName: "Test name",
          lName: "Test lname"
        }]
      };

      const propsErr = checkPropTypes(HeadLine.propTypes, expectedProps, 'props', HeadLine.name);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "test header",
        desc: "Test desc"
      };
      wrapper = setUp(props);
    });


    it("Should render without errors", () => {
      const headline = findByTestAttr(wrapper, "headline");
      expect(headline.length).toBe(1); 
    });

    it("Should render a desc", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });

  });

  describe("Have No Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({});
    })

    it("Should not render", () => {
      const componenet = findByTestAttr(wrapper, "headline");
      expect(componenet.length).toBe(0);
    });
  });
});
