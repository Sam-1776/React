import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css"
const reactDescription = ["Fundamental", "Crucial", "Core"];

function randomNum(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
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
