import "./styles.css";
import Login from "./components/Login";
import Register from "./components/Register";
let user = prompt("Enter true for Login and false for Not:");

function App() {
  return <>{user == "false" ? <Register /> : <Login />}</>;
}

export default App;
