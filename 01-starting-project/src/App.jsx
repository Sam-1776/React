import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function randomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const firstW = reactDescription[randomNum(reactDescription.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {firstW} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}

function Core({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <Core {...CORE_CONCEPTS[0]} />
            <Core {...CORE_CONCEPTS[1]} />
            <Core {...CORE_CONCEPTS[2]} />
            <Core {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
