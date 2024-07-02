import style from "./interests.module.css";

export default function Interests() {
  return (
    <section className={style.interestsContainer}>
      <h2>Mis intereses</h2>
      <p>Fuera de la programacion tengo una atraccion por estas actividades:</p>
      <ul className={style.list}>
        <li>Musica (Escuchar, cantar, componer)</li>
        <li>Pasear y disfrutar el tiempo con amigos</li>
        <li>Poesia y Lectura</li>
        <li>Meditacion</li>
        <li>Organizar mi vida</li>
      </ul>
    </section>
  );
}
