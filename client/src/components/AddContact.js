import React, { useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  editContact,
  toggleFalse,
} from "../JS/actions/actionContact";
import { Link } from "react-router-dom";

const AddContact = () => {
  const [newContact, setnewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const Edit = useSelector((state) => state.Edit);

  const user = useSelector((state) => state.user);
  useEffect(() => {
    Edit
      ? setnewContact(user)
      : setnewContact({
          name: "",
          email: "",
          phone: "",
        });
  }, [Edit, user]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setnewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "22rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            color: "white",
          }}
        >
          {Edit ? "Edit Contact" : "Add New Contact"}
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>name :</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={newContact.name}
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>email :</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={newContact.email}
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>phone :</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={newContact.phone}
                  placeholder="Enter your phone"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to="/Contact_list">
            <Button
              variant="outline-primary edit-button"
              onClick={
                Edit
                  ? () => dispatch(editContact(newContact._id, newContact))
                  : () => dispatch(addContact(newContact))
              }
            >
              {Edit ? "Save" : "Add"}
            </Button>
          </Link>
          <Link to="/Contact_list">
            <Button
              variant="outline-danger edit-button"
              onClick={() => dispatch(toggleFalse())}
            >
              Cancel
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default AddContact;
