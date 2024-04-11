import Core from "./Core.jsx"
import { CORE_CONCEPTS } from "../../data-with-examples.js";
export default function Cores() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <Core key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}
