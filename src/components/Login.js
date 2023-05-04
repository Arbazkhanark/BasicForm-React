import "./components.css";
import Input from "./Input";
import Logbuttons from "./Logbuttons";

function Login() {
  return (
    <>
      <div className="login">
        <h1>Log In</h1>
        <Input type="email" placeholder="Username" /> <br />
        <Input placeholder="Password" type="password" /> <br />
        <Logbuttons style="loginBtn" type="submit" value="Log In" />
      </div>
    </>
  );
}

export default Login;
