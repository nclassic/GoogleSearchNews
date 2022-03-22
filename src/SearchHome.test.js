/** @format */
import React from "react";
import reactDom from "react-dom";
import SearchHome from "./SearchHome";
import render from "@testing-library/react";
import "@testing-library/jest-dom";
it("renders without crashing", () => {
  const div = document.createElement("div");
  reactDom.render(<SearchHome />, div);
});
