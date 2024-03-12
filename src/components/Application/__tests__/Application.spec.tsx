import { render, screen } from "@testing-library/react";
import Application from "..";

describe("Application", () => {
  it("renders correctly", () => {
    render(<Application />);

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const pageHeadingElement = screen.getByRole("heading", {
      //   name: "Job application",
      level: 1,
    });
    expect(pageHeadingElement).toBeInTheDocument();

    const pageSecondHeadingElement = screen.getByRole("heading", {
      //   name: "Section 1",
      level: 4,
    });
    expect(pageSecondHeadingElement).toBeInTheDocument();
  });
});
