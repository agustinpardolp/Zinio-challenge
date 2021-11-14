import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Document from ".";
import { getFullWrappedComponent } from "../../utils";
import { documentList } from "./constants";
import userEvent from "@testing-library/user-event";

describe("Document view", () => {
  beforeEach(() => {
    render(getFullWrappedComponent(Document));
  });

  test("Render component correctly", async () => {
    expect(screen.getByText("Listado de documentos")).toBeInTheDocument();
    expect(screen.getByText(documentList[0].title)).toBeInTheDocument();
    expect(screen.getByText(documentList[0].type)).toBeInTheDocument();
  });

  test("Render detail button on hover", async () => {
    const button = screen.getAllByTestId("photo_card")[0];
    userEvent.hover(button);
    expect(screen.getAllByText("Ver Detalle")[0]).toBeInTheDocument();
  });

  test("Render filter options correctly", async () => {
    userEvent.selectOptions(screen.getByTestId("select"), "simple");
    expect(screen.getByText("simple").selected).toBeTruthy();
    expect(screen.getByText("advanced").selected).toBeFalsy();
  });

  test("Display modal correctly on create action", async () => {
    const button = await screen.findByRole("button", {
      name: "Nuevo documento",
    });
    userEvent.click(button);
    expect(
      await screen.findByText("Cargar nuevo documento:")
    ).toBeInTheDocument();
    expect(await screen.findByPlaceholderText("Titulo")).toBeInTheDocument();
    expect(await screen.findByPlaceholderText("Texto")).toBeInTheDocument();
    expect(await screen.findByPlaceholderText("Fecha")).toBeInTheDocument();
  });

  test("Error message is not displayed if form is complete and button is disabled", async () => {
    const button = await screen.findByRole("button", {
      name: "Nuevo documento",
    });
    userEvent.click(button);
    expect(
      await screen.findByText("Formulario incompleto")
    ).toBeInTheDocument();
    expect(screen.queryByText("Confirmar")).toBeDisabled();
    const inputTitle = screen.getByPlaceholderText("Titulo");
    const inputDate = screen.getByPlaceholderText("Fecha");
    userEvent.type(inputTitle, "Test Title");
    userEvent.type(inputDate, "2020-10-01");
    expect(screen.queryByText("Formulario incompleto")).not.toBeInTheDocument();
    expect(screen.queryByText("Confirmar")).not.toBeDisabled();
  });
  test("Create Document correctly", async () => {
    const button = await screen.findByRole("button", {
      name: "Nuevo documento",
    });
    userEvent.click(button);
    expect(
      await screen.findByText("Formulario incompleto")
    ).toBeInTheDocument();
    expect(screen.queryByText("Confirmar")).toBeDisabled();
    const inputTitle = screen.getByPlaceholderText("Titulo");
    const inputDate = screen.getByPlaceholderText("Fecha");
    userEvent.type(inputTitle, "Test Title");
    userEvent.type(inputDate, "2020-10-01");
    userEvent.click(
      screen.getByRole("button", {
        name: "Confirmar",
      })
    );
    expect(
      screen.queryByText("Cargar nuevo documento:")
    ).not.toBeInTheDocument();
    expect(await screen.findByText("Test Title")).toBeInTheDocument();
  });
});
