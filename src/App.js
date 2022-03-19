import AddContact from "./components/contact/AddContact";
import ContactList from "./components/contact/ContactList";
import Header from "./components/header/Header";

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState([])
  const getContact = (contact) => {
    setContacts([...contacts, contact])
  }
  useEffect(() => {
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setContacts(retriveContact)
  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const getId = (id) => {
    const filterContact = contacts.filter(contact => contact.id !== id)
    setContacts(filterContact)
  }


  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <Header />
        <Routes>
          <Route index path="/" element={<ContactList getId={getId} contacts={contacts} />} />
          <Route path="/add" element={<AddContact getContact={getContact} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
