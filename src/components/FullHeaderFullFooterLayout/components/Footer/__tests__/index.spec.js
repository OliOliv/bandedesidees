import { render, screen } from "@testing-library/react";

import Footer from "../";

describe("Footer", () => {
  it("should render the social network message", () => {
    // Given
    const socialNetworkText = "Retrouvez-nous sur";

    // When
    render(<Footer />);

    // Then
    expect(screen.getByText(socialNetworkText)).toBeInTheDocument();
  });

  it("should render the legal notice message", () => {
    // Given
    const legalText = "Mentions légales";

    // When
    render(<Footer />);

    // Then
    expect(screen.getByText(legalText)).toBeInTheDocument();
  });
});
