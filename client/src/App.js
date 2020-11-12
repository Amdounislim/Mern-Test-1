import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, toggleFalse } from "./JS/actions/actionContact";
import ContactCard from "./components/ContactCard";
import AddContact from "./components/AddContact";

function App() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const getAllContact = () => {
    dispatch(getContacts());
  };
  useEffect(() => {
    getAllContact();
  }, []);
  return (
    <BrowserRouter>
      <Link to="/Contact_list">
        <Button variant="outline-primary button">Contact List</Button>
      </Link>
      <Link to="/Add_contact">
        <Button
          variant="primary button"
          onClick={() => dispatch(toggleFalse())}
        >
          Add Contact
        </Button>
      </Link>
      <Switch>
        <Route
          path="/(Add_contact|Edit_contact)/"
          render={() => <AddContact />}
        />
        
        <Route
          path="/Contact_list"
          render={() => (
            <div className="contact-list">
              {contacts.map((el, i) => (
                <ContactCard contact={el} key={i} />
              ))}
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
