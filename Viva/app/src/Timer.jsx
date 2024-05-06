import { useEffect, useRef, useState } from "react";
import "./App.css";
import Cookies from "universal-cookie";
import axios from "axios";
function Timer() {
  let [time, setTime] = useState(0);
  let [pause, setPause] = useState(false);
  const [user, setUser] = useState(null);
  let timer = useRef(time);
  let pauser = useRef(pause);
  let interval;
  const cookies = new Cookies();
  function start() {
    if (!interval) {
      interval = setInterval(changeTime, 3000);
    }
  }

  function bgColor() {
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() * 16)];
    }
    const div = document.getElementsByClassName("main")[0];

    if (timer.current % 2 == 0 && timer.current != 0) {
      div.style.backgroundColor = color;
    }
  }

  function pauseChange() {
    console.log(pauser, pause);
    setPause(true);
    pauser.current = pause;
    console.log("clear", pauser, pause);
  }

  function clearTimer() {
    setPause(true);
    pauser.current = pause;

    cookies.remove("time");
    console.log("clear", pauser);
  }

  async function changeTime() {
    if (pauser.current == true || time == 20) {
      clearInterval(interval);
      console.log("cleared");
    } else {
      setTime(time++);
      timer.current = time;
      cookies.set("time", timer.current);
      document.getElementsByClassName("display")[0].innerHTML = time;
      console.log(time, timer);
      const res = await axios.get(`http://localhost:3000/getOne/${time}`);
      console.log(res.data);
      setUser(res.data);
    }
  }

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    bgColor();
  }, [time]);

  return (
    <>
      <div className="main">
        <h1 className="display">0</h1>
        <button onClick={() => pauseChange()}>pause</button>
        <button onClick={() => clearTimer()}>Stop</button>
      </div>

      <div>
        {user && <h2>Current user: {user.userName}</h2>}
        {user && <h2>Current userid: {user.userId}</h2>}
        {user && <h2>Current user gender: {user.gender}</h2>}
      </div>
    </>
  );
}

export default Timer;
