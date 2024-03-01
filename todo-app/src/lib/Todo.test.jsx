import React from "react";
import { render } from "@testing-library/react";
import { Todo } from "./Todo";

it("renders without crashing", () => {
  render(<Todo text="Test Todo" />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Todo text="Test Todo" />);
  expect(asFragment()).toMatchSnapshot();
});

it("displays the correct text", () => {
  const { getByText } = render(<Todo text="Test Todo" />);
  expect(getByText("Test Todo")).toBeInTheDocument();
});