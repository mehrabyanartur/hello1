import Home from "./components/Home";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <h1>{count}</h1>
      <Home setCount={setCount} />
      <Test setCount={setCount} />
    </div>
  );
}

export default App;
