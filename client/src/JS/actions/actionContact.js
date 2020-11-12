import axios from "axios";
import {
  GET_CONTACTS,
  GET_CONTACT,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
} from "../constants/actionsTypes";

export const getContacts = () => (dispatch) => {
  axios
    .get("/api/contacts")
    .then((res) => dispatch({ type: GET_CONTACTS, payload: res.data }))
    .catch((err) => console.log(err));
};
export const getContact = (id) => (dispatch) => {
  axios
    .get(`/api/contacts/${id}`)
    .then((res) => dispatch({ type: GET_CONTACT, payload: res.data }))
    .catch((err) => console.log(err));
};

export const addContact = (newContact) => (dispatch) => {
  axios
    .post("/api/contacts", newContact)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

export const deleteContact = (id) => (dispatch) => {
  axios
    .delete(`/api/contacts/${id}`)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

export const editContact = (id, editContact) => (dispatch) => {
  axios
    .put(`/api/contacts/${id}`, editContact)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};

export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};
export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};
