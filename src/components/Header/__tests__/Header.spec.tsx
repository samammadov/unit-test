import { render, screen } from "@testing-library/react";
import Header from "..";

describe("Header", () => {
  test("must be in screen", () => {
    render(<Header />);
    const headerElement = screen.getByText("Header");
    expect(headerElement).toBeInTheDocument();
  });
});
