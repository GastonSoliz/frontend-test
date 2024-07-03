"use client";
import { useState } from "react";
import style from "./contactform.module.css";

function validateForm(inputs) {
  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let errors = {};
  if (!inputs.name) errors.name = "Se debe ingresar un nombre";
  if (!inputs.email) errors.email = "Se debe ingresar un correo";
  else if (!regexEmail.test(inputs.email))
    errors.email = "Debe tener formato de correo";
  if (!inputs.message) errors.message = "Se debe ingresar un mensaje";
  return errors;
}

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(data);
    setErrors(validationErrors);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);

    if (Object.keys(validationErrors).length > 0) {
      setSuccess(false);
    } else {
      setSuccess(true);
    }
  };

  return (
    <section className={style.contactContainer}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.formInput}>
          <div className={style.formDiv}>
            <label htmlFor="name">
              Nombre<span className={style.required}>*</span>:
            </label>
            <input id="name" type="text" name="name" onChange={handleChange} />
          </div>
          <span className={style.errors}>{errors.name}</span>
        </div>
        <div className={style.formInput}>
          <div className={style.formDiv}>
            <label htmlFor="email">
              Correo<span className={style.required}>*</span>:
            </label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={handleChange}
            />
          </div>
          <span className={style.errors}>{errors.email}</span>
        </div>
        <div className={style.formInput}>
          <div className={style.formDiv}>
            <label htmlFor="message">
              Mensaje<span className={style.required}>*</span>:
            </label>
            <textarea id="message" name="message" onChange={handleChange} />
          </div>
          <span className={style.errors}>{errors.message}</span>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {showAlert && success && (
        <div className={style.success}>
          <span>El formulario se envio correctamente!</span>
        </div>
      )}
      {showAlert && !success && (
        <div className={style.failure}>
          <span>Falta rellenar espacios del formulario</span>
        </div>
      )}
    </section>
  );
}
