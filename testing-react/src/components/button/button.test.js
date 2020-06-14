import React from "react";
import { findByTestAttr } from "./../../testHelper";
import SharedButton from "./index";
import checkPropTypes from "check-prop-types";
import { shallow } from "enzyme";

describe("SharedButton Component", () => {
  describe("Checking PropTypes", () => {
    it("Should Not throw a warning", () => {
      const exprectedProps = {
        buttonText: "Exampel Button text",
        emitEvent: () => {},
      };

      const propsErrs = checkPropTypes(
        SharedButton.propTypes,
        exprectedProps,
        "props",
        SharedButton.name
      );
      expect(propsErrs).toBe(undefined);
    });
  });

  describe("Renders", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        buttonText : "hello, button", 
        emitEvent : () => { 
        }
      };
      wrapper = shallow(<SharedButton {...props}></SharedButton>);
    });

    it("Should render without error", () => {
      const button = findByTestAttr(wrapper, "button");
      expect(button.length).toBe(1);
    });

  });
});
