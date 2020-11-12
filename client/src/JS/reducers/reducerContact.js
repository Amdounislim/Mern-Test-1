import { GET_CONTACTS, GET_CONTACT, TOGGLE_TRUE, TOGGLE_FALSE } from "../constants/actionsTypes";

const intialState = {
  contacts: [],
  Edit: false,
  user: {
    name: "",
    email: "",
    phone: "",
  },
};

export const reducerContact = (state = intialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case GET_CONTACT:
      return { ...state, user: action.payload[0] };
    case TOGGLE_TRUE:
      return { ...state, Edit: true };
    case TOGGLE_FALSE:
      return { ...state, Edit: false };

    default:
      return state;
  }
};
