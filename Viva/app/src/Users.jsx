import React, { useEffect, useState } from "react";
import axios from "axios";
function Users() {
  const [users, setUsers] = useState([]);
  const [gender, setGender] = useState("All");

  let dataToDisplay;
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/getall");
      setUsers(res.data);
      dataToDisplay = res.data;
      document.getElementById("data").innerHTML = JSON.stringify(dataToDisplay);
      console.log(dataToDisplay);
    } catch (error) {
      console.log(error);
    }
  };

  const setData = () => {
    if (gender == "All") {
      dataToDisplay = users;
    } else {
      dataToDisplay = users.filter((user) => user.gender == gender);
    }
    console.log(dataToDisplay, gender);
  };
  useEffect(() => {
    setData();
    document.getElementById("data").innerHTML = JSON.stringify(dataToDisplay);
  }, [gender]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="All">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <p id="data"></p>
    </>
  );
}

export default Users;
