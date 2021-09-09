import "./App.css";
import Login from "./pages/Login";
import { GlobalStyle } from "./global";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <Login /> */}
      <Profile />
    </div>
  );
}

export default App;
