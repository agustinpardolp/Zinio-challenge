import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from ".";
import { getFullWrappedComponent } from "../../utils";

const defaultProps = {
  imgUrl: "",
  onClick: jest.fn(),
  value: "1",
  title: "Title Card 1",
  effect: false,
  buttonLabel: "accion button"
};
const newProps = {
  imgUrl: "",
  onClick: null,
  value: "1",
  title: "Title Card 1",
  effect: false,
  buttonLabel: "accion button"
};

describe("Card", () => {
  test("should be defined", () => {
    expect(Card).toBeDefined();
  });
  test("Render component correctly", async () => {
    render(getFullWrappedComponent(Card, defaultProps));
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
  });

  it("Should display button if onClick exist", () => {
    render(getFullWrappedComponent(Card, defaultProps));
    const buttonComponent = screen.getByRole("button", defaultProps.buttonLabel);
    expect(buttonComponent).toBeInTheDocument();
  });
  it("Should not display button if onClick dosent exist", () => {
    render(getFullWrappedComponent(Card, newProps));
    const buttonComponent = screen.queryByText(defaultProps.buttonLabel);
    expect(buttonComponent).not.toBeInTheDocument();
  });
});
