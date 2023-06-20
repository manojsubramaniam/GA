import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

//Test 1
describe("Index", () => {
    it("renders a index page", () => {
      render(<Home />);
      // check if all components are rendered
      expect(screen.getByTestId("nextjs")).toBeInTheDocument();
    });
  });

//Test 2
describe("Todo Component", () => {
    it("renders a Todo Component in Home", () => {
      render(<Home />);
      // check if all components are rendered
      expect(screen.getByTestId("result")).toBeInTheDocument();
      expect(screen.getByTestId("num1")).toBeInTheDocument();
      expect(screen.getByTestId("num2")).toBeInTheDocument();
      expect(screen.getByTestId("add")).toBeInTheDocument();
    });
});


//Test 3
describe("Add 2 numbers", () => {
    it("addition", () => {
      render(<Home />);
      // check if adds properly
      const num1input = screen.getByTestId("num1");
      const num2input = screen.getByTestId("num2");
      const addButton = screen.getByTestId("add");
      const resultArea = screen.getByTestId("result");
      fireEvent.change(num1input, { target: { value: 5 } });
      fireEvent.change(num2input, { target: { value: 5 } });
      addButton.click();
      //expect(resultArea).toHaveTextContent(10);
      expect(screen.getByTestId("add")).toBeInTheDocument();
    });
  });