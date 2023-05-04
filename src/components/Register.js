import Input from "./Input";
import Logbuttons from "./Logbuttons";

function Register() {
  return (
    <>
      <div className="register">
        <h1>Register Here</h1>
        <Input type="text" placeholder="Name" /> <br />
        <Input type="email" placeholder="username" /> <br />
        <Input type="password" placeholder="Password" /> <br />
        <Input type="password" placeholder="Confirm Password" /> <br />
        <Logbuttons type="submit" value="Register" style="loginBtn" />
      </div>
    </>
  );
}

export default Register;
