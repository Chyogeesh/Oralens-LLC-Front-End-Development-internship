import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders form and submits data", () => {
    render(<App />);
    const nameInput = screen.getByLabelText(/name/i);
    const ageInput = screen.getByLabelText(/age/i);
    const submitButton = screen.getByText(/submit/i);

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(ageInput, { target: { value: "30" } });
    fireEvent.click(submitButton);

    // Add assertions to mock API call and verify functionality
});
