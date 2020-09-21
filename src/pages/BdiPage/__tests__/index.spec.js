import { render, screen } from "@testing-library/react";

import BdiPage from "../";

describe("BdiPage", () => {
  it("should render the shop link text if api is ok", () => {
    // Given
    const shopText = "Retrouvez ces livres en librairie";

    // When
    render(<BdiPage eventName="53" />);

    // Then
    expect(screen.getByText(shopText)).toBeInTheDocument();
  });
});
