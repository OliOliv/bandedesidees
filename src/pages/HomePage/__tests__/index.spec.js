import { render, screen } from "@testing-library/react";

import HomePage from "../";
import { mount } from "enzyme";

describe("HomePage", () => {
  it("should render more information button", () => {
    const wrapper = mount(<HomePage />);

    expect(wrapper.find("Button")).toHaveLength(1);
  });

  it("should render the button text", () => {
    // Given
    const buttonText = "Plus d'information";

    // When
    render(<HomePage />);

    // Then
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
});
