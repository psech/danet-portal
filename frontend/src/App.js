import logo from "./logo.svg";
import "./App.css";

import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginButton />
        <LogoutButton />
        <img src={logo} className="App-logo" alt="logo" data-testid="logo" />
        <Profile />
      </header>
    </div>
  );
}

export default App;
