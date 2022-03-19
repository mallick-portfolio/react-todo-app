import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
let data = {};
const AddContact = ({ getContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  data = {
    id: uuidv4(),
    name,
    email,
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const contactData = JSON.parse(localStorage.getItem("contacts"));
    console.log(contactData);

    if (name === "" || email === "") {
      alert("please provide name and email");
      return;
    }
    getContact(data);
    setName("");
    setEmail("");
  };
  return (
    <div>
      <Link className="btn btn-info mb-3" to="/">
        Go Home
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="form-floating  mb-3">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="Name"
          />
          <label htmlFor="floatingName">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <button className="btn btn-primary">Add Contact</button>
      </form>
    </div>
  );
};

export default AddContact;
