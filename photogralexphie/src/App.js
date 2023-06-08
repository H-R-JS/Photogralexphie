import "../src/Components/SASS/Header&Nav.scss";
import { PHTGRouter } from "./Components/Router/PHTGRouter";
import { Header } from "./Components/HeadCompo/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <PHTGRouter />
    </div>
  );
}

export default App;
