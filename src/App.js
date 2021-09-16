import Routes from "./routes";
import "./App.css"
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
