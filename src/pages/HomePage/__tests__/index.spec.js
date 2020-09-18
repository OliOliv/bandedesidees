import { render, screen } from "@testing-library/react";

import HomePage from "../";
import { mount } from "enzyme";

describe("HomePage", () => {
  it("should render more information button", () => {
    const wrapper = mount(<HomePage />);

    expect(wrapper.find("Button")).toHaveLength(2);
  });

  it("should render the button text", () => {
    // Given
    const buttonText = "Plus d'information";
    const responsiveButtonText = "Prochaine BDI";

    // When
    render(<HomePage />);

    // Then
    expect(screen.getByText(buttonText)).toBeInTheDocument();
    expect(screen.getByText(responsiveButtonText)).toBeInTheDocument();
  });
});
