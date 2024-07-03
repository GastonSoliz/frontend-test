import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactForm from "./ContactForm";

test("Renderiza el componente ContactForm.", () => {
  render(<ContactForm />);
  expect(screen.getByText(/Contacto/i)).toBeInTheDocument();
});

test("Muestra los errores cuando el formulario quiere subirse.", () => {
  render(<ContactForm />);
  fireEvent.click(screen.getByText(/Enviar/i));
  expect(screen.getByText(/Se debe ingresar un nombre/i)).toBeInTheDocument();
  expect(screen.getByText(/Se debe ingresar un correo/i)).toBeInTheDocument();
  expect(screen.getByText(/Se debe ingresar un mensaje/i)).toBeInTheDocument();
});

test("Muestra un error especifico de correo cuando el formato no es valido", () => {
  render(<ContactForm />);
  fireEvent.change(screen.getByLabelText(/Correo/i), {
    target: { value: "gaston.email.com" },
  });
  fireEvent.click(screen.getByText(/Enviar/i));
  expect(screen.getByText(/Debe tener formato de correo/i)).toBeInTheDocument();
});

test("Muestra un mensaje de exito al mandar correctamente el formulario.", () => {
  render(<ContactForm />);
  fireEvent.change(screen.getByLabelText(/Nombre/i), {
    target: { value: "Gaston Soliz" },
  });
  fireEvent.change(screen.getByLabelText(/Correo/i), {
    target: { value: "gaston@email.com" },
  });
  fireEvent.change(screen.getByLabelText(/Mensaje/i), {
    target: { value: "Hola! Como estas?" },
  });
  fireEvent.click(screen.getByText(/Enviar/i));
  expect(
    screen.getByText(/El formulario se envio correctamente!/i)
  ).toBeInTheDocument();
});
