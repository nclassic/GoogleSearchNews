/** @format */
import React from "react";
import { shallow } from "enzyme";
import SearchHome from "./SearchHome";
it("should create an entry in component state", () => {
  const component = shallow(<SearchHome />);
  const form = component.find("input");
  form.props().onChange({
    target: {
      name: "myName",
      value: "myValue",
    },
  });
  expect(component.state("Input")).toBeDefined();
});
