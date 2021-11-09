import "./App.css";
import Badge from "./lib/components/Badge";
import Button from "./lib/components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>

        <Button label={"christmas"} />
        <Badge value={15} />
      </header>
    </div>
  );
}

export default App;
