import { Route, Routes } from "react-router-dom";
import App from "./App";
import Timer from "./Timer";
import Form from "./Form";
import Users from "./Users";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Timer />}></Route>
      <Route path="/form" element={<Form />}></Route>
      <Route path="/users" element={<Users />}></Route>
    </Routes>
  );
}

export default Allroutes;
