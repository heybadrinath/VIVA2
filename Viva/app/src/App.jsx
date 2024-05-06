import Allroutes from "./AllRoutes";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/form">Form</Link>
          <br />
        <Link to="/users">users</Link>
        <br />
          <Link to="/">timer</Link>
        </div>
        <Allroutes />
      </BrowserRouter>
    </>
  );
}

export default App;
