import { render, screen, waitFor, act } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";

import TextArea from ".";
const TextAreaPlaceholder = 'Agregar nueva tarea test';
const inputValueTest = 'tarea test a agregar';

describe("TextArea", () => {
    const defaultProps = {
        placeholder: TextAreaPlaceholder,
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
        expect(TextArea).toBeDefined();
    });
    test("should render correctly", async () => {
        render(<TextArea {...defaultProps} />);
        const inputComponent = screen.getByRole('textbox', TextAreaPlaceholder)
        expect(screen.getByPlaceholderText(TextAreaPlaceholder)).toBeInTheDocument();
        expect(inputComponent).not.toBeDisabled();
    });
    test("should change values correctly", async () => {
        render(<TextArea  {...defaultProps} />);
        const inputComponent = screen.getByRole('textbox', TextAreaPlaceholder)
        userEvent.type(inputComponent, inputValueTest);
        await waitFor(() => {
            expect(inputComponent).toHaveValue(inputValueTest)
            expect(inputComponent).not.toHaveValue('')
        })
    });
    test("should not work if prop disabled is true ", async () => {
        render(<TextArea {...defaultProps} disabled={true} />);
        const inputComponent = screen.getByRole('textbox', TextAreaPlaceholder)
        expect(inputComponent).toBeDisabled();
    });
    test("should be focus if prop disabled is false", async () => {
        render(<TextArea  {...defaultProps} />);
        const inputComponent = screen.getByRole('textbox')
        act(() => inputComponent.focus());
        expect(inputComponent).toHaveFocus();
    });
    test("should not to be focus if prop disabled is true", async () => {
        render(<TextArea {...defaultProps} disabled={true} />);
        const inputComponent = screen.getByRole('textbox')
        act(() => inputComponent.focus());
        expect(inputComponent).not.toHaveFocus();
    });

});
