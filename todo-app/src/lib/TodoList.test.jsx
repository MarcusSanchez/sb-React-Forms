import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoList } from "./TodoList";

it("renders without crashing", function () {
  const todos = [{ id: 1, text: "Test Todo" }];
  render(<TodoList todos={todos} />);
});

it("displays the correct text", function () {
  const todos = [{ id: 1, text: "Test Todo" }];
  const { getByText } = render(<TodoList todos={todos} />);
  expect(getByText("Test Todo")).toBeInTheDocument();
});

it("can delete a todo", function () {
  const todos = [{ id: 1, text: "Test Todo" }];
  const { getByText, queryByText } = render(<TodoList todos={todos} />);

  // todo should be in the document
  expect(getByText("Test Todo")).toBeInTheDocument();

  // click the delete button
  fireEvent.click(getByText("X"));

  // todo should be gone
  expect(queryByText("Test Todo")).not.toBeInTheDocument();
});