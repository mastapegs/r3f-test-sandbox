import { render, screen } from "@testing-library/react";
import Background from "./Background";

it("should render a container with TailwindCSS class min-h-screen", () => {
  render(<Background />);
  expect(screen.getByTestId("background")).toHaveClass("min-h-screen");
});

it("should render its children", () => {
  const data = "Hello World";
  render(<Background>{data}</Background>);
  expect(screen.getByText(data)).toBeInTheDocument();
});
