import React, { useState } from "react";
import axios from "axios";
function Form() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [gender, setGender] = useState("male");
  const handleSubmit = async () => {
    
    try {
      console.log(gender);
      const response = await axios.post("http://localhost:3000/addUser", {
        userName: name,
        userId: id,
        gender: gender,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
