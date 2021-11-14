import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";

import Input from ".";
const InputPlaceholder = 'Agregar nueva tarea test';
const inputValueTest = 'tarea test a agregar';

describe("Input", () => {
    const defaultProps = {
        placeholder: InputPlaceholder,
        handleChange: jest.fn(),
        disabled: false,
        type:"text",
        keyValue:"1",
        name:"input",
        width: "100px",
        height: "50px",
        value: inputValueTest,
        defaultValue: null,
        disabled: false
    }
    test('should be defined', () => {
        expect(Input).toBeDefined();
    });
    test("should render correctly", async () => {
        render(<Input {...defaultProps} />);
        const inputComponent = screen.getByRole('textbox', InputPlaceholder)
        expect(screen.getByPlaceholderText(InputPlaceholder)).toBeInTheDocument();
        expect(inputComponent).not.toBeDisabled();
    });
    test("should change values correctly", async () => {
        render(<Input  {...defaultProps} />);
        const inputComponent = screen.getByRole('textbox', InputPlaceholder)
        userEvent.type(inputComponent, inputValueTest);
        await waitFor(() => {
            expect(inputComponent).toHaveValue(inputValueTest)
            expect(inputComponent).not.toHaveValue('')
        })
    });
    test("should not work if prop disabled is true ", async () => {
        render(<Input {...defaultProps} disabled={true} />);
        const inputComponent = screen.getByRole('textbox', InputPlaceholder)
        expect(inputComponent).toBeDisabled();
    });
    test("should be focus if prop disabled is false", async () => {
        render(<Input  {...defaultProps} />);
        const inputComponent = screen.getByRole('textbox')
        act(() => inputComponent.focus());
        expect(inputComponent).toHaveFocus();
    });
    test("should not to be focus if prop disabled is true", async () => {
        render(<Input {...defaultProps} disabled={true} />);
        const inputComponent = screen.getByRole('textbox')
        act(() => inputComponent.focus());
        expect(inputComponent).not.toHaveFocus();
    });

});
