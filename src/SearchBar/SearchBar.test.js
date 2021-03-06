import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SearchBar from "./SearchBar";

describe("Search component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<SearchBar />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
