const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

//@Api http:localhost:7000/api/contacts
//@desc Add new Contact
//@access public
router.post("/", (req, res) => {
  const newContact = new Contact({ ...req.body });
  newContact
    .save()
    .then((contact) => res.send(contact))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7000/api/contacts
//@desc Get All Contacts
//@access public
router.get("/", (req, res) => {
  Contact.find()
    .then((contacts) => res.send(contacts))
    .catch((err) => console.log(err));
});

//@Api http:localhost:7000/api/contacts/:_id
//@desc Get Contact by Id
//@access public
router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  Contact.find({ _id })
    .then((contact) => res.send(contact))
    .catch((err) => console.log(err));
});

//@Api http:localhost:7000/api/contacts/:_id
//@desc Delete Contact by Id
//@access public
router.delete("/:_id", (req, res) => {
  let { _id } = req.params;
  Contact.findByIdAndDelete({ _id })
    .then(() => res.send("contact has been deleted"))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7000/api/contacts/:_id
//@desc Update Contact by Id
//@access public
router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  Contact.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then(() => res.send("contact has been updated"))
    .catch((err) => res.send(err));
});

module.exports = router;
