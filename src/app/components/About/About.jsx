import style from "./about.module.css";

export default function About() {
  const technologies = [
    "HTML",
    "CSS",
    "GIT",
    "Javascript",
    "Typescript",
    "React",
    "Next.js",
    "Redux",
    "Node.js",
    "Express",
    "Sequelize",
    "PostgreSQL",
    "MySQL",
  ];
  return (
    <section className={style.aboutContainer}>
      <h2>Sobre mi</h2>
      <p>
        Soy un Desarrollador Full Stack que desarrolla diferentes proyectos para
        aplicar los conocimientos obtenidos en tecnologías como:
      </p>
      <ul className={style.tech}>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <p className={style.text2}>
        Me considero una persona comprometida, disciplinada y empática.
        Apasionado por aportar mis conocimientos en los proyectos que participo
        para lograr crecer profesional y personalmente. Disfruto la utilizacion
        de componentes en el Front-End con React pero prefiriendo la logica del
        Back-End, un equilibrio necesario para facilitar la experiencia del
        usuario.
      </p>
    </section>
  );
}
