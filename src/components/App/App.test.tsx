import { render, screen } from "@testing-library/react";
import App from "./App";
import data from "./data.json";

it("renders h1 text from data file", () => {
  render(<App />);
  const regex = new RegExp(data.h1, "i");
  const h1Element = screen.getByText(regex);
  expect(h1Element).toBeInTheDocument();
});
