import Header from "./components/Header/Header";
import Interests from "./components/Interests/Interests";
import ContactForm from "./components/ContactForm/ContactForm";
import About from "./components/About/About";
import style from "./page.module.css";

export default function Home() {
  return (
    <main className={style.mainContainer}>
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </main>
  );
}
