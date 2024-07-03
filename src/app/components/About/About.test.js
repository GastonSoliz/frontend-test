import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "./About";

test("Renderiza el component About.", () => {
  render(<About />);
  expect(screen.getByText(/Sobre mi/i)).toBeInTheDocument();
});

test("El primer parrafo contiene el texto correcto", () => {
  render(<About />);
  expect(
    screen.getByText(
      /Soy un Desarrollador Full Stack que desarrolla diferentes proyectos para/i
    )
  ).toBeInTheDocument();
});

test("El segundo parrafo contiene el texto correcto", () => {
  render(<About />);
  expect(
    screen.getByText(
      /Me considero una persona comprometida, disciplinada y empática/i
    )
  ).toBeInTheDocument();
});

test("Cada tecnologia esta en un elemento de lista", () => {
  render(<About />);
  expect(screen.getAllByRole("listitem")).toHaveLength(13);
});
