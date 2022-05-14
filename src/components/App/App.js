import "./App.css";
import Nav from "../Nav/Nav";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider>
        <Nav />
      </Provider>
    </div>
  );
}

export default App;
