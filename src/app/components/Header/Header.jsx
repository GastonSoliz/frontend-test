import Image from "next/image";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.headerContainer}>
      <div className={style.image}>
        <Image
          src="/Profile-Transparent.png"
          alt="Gaston Soliz"
          width={160}
          height={200}
          priority
        />
      </div>
      <h1>Gaston Soliz</h1>
    </header>
  );
}
