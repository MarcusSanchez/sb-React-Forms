import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BoxList } from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("can add and remove a box", function () {
  const boxList = render(<BoxList />);

  // no boxes yet
  expect(boxList.queryByText("Remove The Box!")).not.toBeInTheDocument();

  // add a box
  const heightInput = boxList.getByLabelText("Height");
  const widthInput = boxList.getByLabelText("Width");
  const backgroundInput = boxList.getByLabelText("Background Color");
  fireEvent.change(backgroundInput, { target: { value: "peachpuff" } });
  fireEvent.change(widthInput, { target: { value: "2" } });
  fireEvent.change(heightInput, { target: { value: "2" } });
  const button = boxList.getByText("Add a new box!");
  fireEvent.click(button);

  // expect to see a box
  const removeButton = boxList.getByText("Remove The Box!");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
    width: 2em;
    height: 2em;
    background-color: peachpuff;
  `);

  // expect form to be empty
  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);

  // remove the box
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});