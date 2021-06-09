import logo from "./logo.svg";
import "./App.css";
import { MinMaxClamp } from "./component/MinMaxWidth/minMaxClamp";

function App() {
  return (
    <div>
      <div className="heading">
        <h2>CSS Tutorial with Kevin Powell</h2>
      </div>

      <MinMaxClamp />
    </div>
  );
}

export default App;
