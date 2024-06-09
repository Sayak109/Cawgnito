import { Route, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import "./App.css";

function App() {
  const location = useLocation();

  const getBackgroundClass = () => {
    if (location.pathname === "/chats") {
      return "chat-background";
    }
    return "home-background";
  };

  return (
    <div className={`App ${getBackgroundClass()}`}>
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
