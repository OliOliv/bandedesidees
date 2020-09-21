import { render, screen } from "@testing-library/react";

import ErrorPage from "../";

describe("ErrorPage", () => {
  it("should render the error message", () => {
    // Given
    const errorText = "Oups, la page que vous recherchez semble introuvable !";

    // When
    render(<ErrorPage />);

    // Then
    expect(screen.getByText(errorText)).toBeInTheDocument();
  });

  it("should render the error link", () => {
    // Given
    const errorLink = "Retourner à l'accueil";

    // When
    render(<ErrorPage />);

    // Then
    expect(screen.getByText(errorLink)).toBeInTheDocument();
  });
});
