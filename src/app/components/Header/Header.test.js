import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

test("Renderiza componente Header", () => {
  render(<Header />);
  expect(screen.getByText(/Gaston Soliz/i)).toBeInTheDocument();
});

test("Renderiza la imagen con las propiedades adecuadas", () => {
  render(<Header />);
  expect(screen.getByAltText(/Gaston Soliz/i)).toBeInTheDocument();
  expect(screen.getByAltText(/Gaston Soliz/i)).toHaveAttribute(
    "src",
    expect.stringContaining("Profile-Transparent.png")
  );
  expect(screen.getByAltText(/Gaston Soliz/i)).toHaveAttribute("width", "160");
  expect(screen.getByAltText(/Gaston Soliz/i)).toHaveAttribute("height", "200");
});

test("El titulo contiene el texto correcto", () => {
  render(<Header />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    /Gaston Soliz/i
  );
});
