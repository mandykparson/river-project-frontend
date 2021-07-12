import './App.css';
import Login from "./Components/Login"
import Signup from "./Components/Signup"

function App() {
  return (
    <div className="App">
      <h1>The River Project</h1>
      <h2>Login</h2> 
      <Login />
      <h2>Sign Up</h2>
      <Signup />
    </div>
  );
}

export default App;
