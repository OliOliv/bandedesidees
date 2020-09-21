import { render, screen } from "@testing-library/react";

import Button from "../";

describe("Button", () => {
  it("should render the button with the good text props", () => {
    // Given
    const buttonText = "Suivant";

    // When
    render(<Button text={buttonText} />);

    // Then
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
});
