import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getId }) => {
  return (
    <div>
      <Link to="/add">
        <button className="btn btn-primary">Add new Contact</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} getId={getId} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
