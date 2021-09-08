import "./App.css";
import Login from "./pages/Login";
import { GlobalStyle } from "./global";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Login /> */}
      <Post />
    </div>
  );
}

export default App;
