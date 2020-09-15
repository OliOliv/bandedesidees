import { mount } from "enzyme";

import HomePage from "../";

describe("HomePage", () => {
  it("should render more information button", () => {
    const wrapper = mount(<HomePage />);

    expect(wrapper.find("Button")).toHaveLength(1);
  });
});
