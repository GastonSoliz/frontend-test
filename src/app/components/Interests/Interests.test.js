import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Interests from "./Interests";

test("Renderiza el componente Interests", () => {
  render(<Interests />);
  expect(screen.getByText(/Mis intereses/i)).toBeInTheDocument();
});

test("El primer parrafo contiene el texto correcto", () => {
  render(<Interests />);
  expect(
    screen.getByText(
      /Fuera de la programación tengo una atracción por estas actividades:/i
    )
  ).toBeInTheDocument();
});

test("Cada interes esta en un elemento de lista", () => {
  render(<Interests />);
  expect(screen.getAllByRole("listitem")).toHaveLength(6);
});
