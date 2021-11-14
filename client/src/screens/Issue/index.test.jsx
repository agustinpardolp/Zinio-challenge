/* eslint-disable camelcase */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Document from ".";
import { getFullWrappedComponent } from "../../utils";
import { store } from "../../store";
import types from "../../store/actions/documentsActions/types";

const document = {
  date: "2020-05-22",
  id: 1,
  img: "javascript.png",
  text: "Texto mockeado",
  title: "Introduccion al testing",
  type: "advanced",
};
const props = {
  status: "LOADED",
  document,
};

describe("Document view", () => {
  beforeEach(() => {
    store.dispatch({
      type: types.FETCH_DOCUMENT_BY_ID_REQUEST,
      payload: {
        data: document,
      },
    });

    render(getFullWrappedComponent(Document, props));
  });
  test("Render component correctly", async () => {
    expect(await screen.getAllByText(document.title)[0]).toBeInTheDocument();
    expect(await screen.findByText(document.text)).toBeInTheDocument();
    expect(
      await screen.findByRole("button", { name: "Eliminar" })
    ).toBeInTheDocument();
  });

  test("Date input is disabled", async () => {
    const dateInput = await screen.findByTestId("input");
    expect(dateInput).toBeDisabled();
  });

  test("Display modal correctly on delete action", async () => {
    const button = await screen.findByRole("button", { name: "Eliminar" });
    userEvent.click(button);
    expect(
      await screen.findByText("¿Está seguro que desa eliminar este documento?")
    ).toBeInTheDocument();
  });
});
