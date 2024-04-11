import Header from "./components/Header/Header.jsx";
import Cores from "./components/Core/Cores.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <Cores />
        <Examples />
      </main>
    </>
  );
}

export default App;
