import style from "./interests.module.css";

export default function Interests() {
  const interests = [
    "Musica (Escuchar, cantar, componer)",
    "Pasear y disfrutar el tiempo con amigos",
    "Estudiar",
    "Ver peliculas o series",
    "Poesia y Lectura",
    "Introspeccion",
  ];

  return (
    <section className={style.interestsContainer}>
      <header>
        <h2>Mis intereses</h2>
        <p>
          Fuera de la programación tengo una atracción por estas actividades:
        </p>
      </header>
      <ul className={style.list}>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
}
