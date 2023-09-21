//import "./App.css";
import { wineData } from "./components/data";
import Flavanoids from "./components/Flavanoids/Flavanoids";
import Gamma from "./components/Gamma/Gamma";

function App() {
  console.log(wineData);
  return (
    <div className="App">
      <Flavanoids />
      <Gamma />
    </div>
  );
}

export default App;
