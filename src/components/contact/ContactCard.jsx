import React from "react";

const ContactCard = ({ contact, getId }) => {
  const { name, email, id } = contact;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <button className="btn btn-danger" onClick={() => getId(id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ContactCard;
