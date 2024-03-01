import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { NewTodoForm } from "./NewTodoForm";

it("renders without crashing", () => {
  render(<NewTodoForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", () => {
  const { getByLabelText, getByText, queryByText } = render(<NewTodoForm />);

  // no todos yet
  expect(queryByText("Test Todo")).not.toBeInTheDocument();

  // fill out the form
  fireEvent.change(getByLabelText("New Todo"), { target: { value: "Test Todo" } });
  fireEvent.click(getByText("Add Todo"));

  // new todo should be in the document
  expect(queryByText("Test Todo")).toBeInTheDocument();
});

it("clears the input field after adding a new todo", () => {
  const { getByLabelText, getByText } = render(<NewTodoForm />);

  // fill out the form
  fireEvent.change(getByLabelText("New Todo"), { target: { value: "Test Todo" } });
  fireEvent.click(getByText("Add Todo"));

  // input field should be empty
  expect(getByLabelText("New Todo").value).toBe("");
});
