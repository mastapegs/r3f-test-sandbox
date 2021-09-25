import { render, screen } from "@testing-library/react";
import Paper from "./Paper";

it("should render a container with appropriate Tailwind classes", () => {
  render(<Paper />);
  expect(screen.getByTestId("paper")).toHaveClass(
    "bg-white",
    "p-4",
    "rounded",
    "shadow-lg"
  );
});

it("should render its children", () => {
  const data = "Hello World";
  render(<Paper>{data}</Paper>);
  expect(screen.getByText(data)).toBeInTheDocument();
});
