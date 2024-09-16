import "react-native-get-random-values";
import { v4 } from "uuid";
const mapContact = (contact) => {
  const { name, picture, phone, cell, email } = contact;
  return {
    id: v4(),
    name: name.first + " " + name.last,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() >= 0.5,
  };
};
const fetchContacts = async () => {
    const response = await fetch(
      "https://randomuser.me/api/?results=100&seed=fullstackio"
    );
    const contactData = await response.json();
    const apiContacts = contactData.results.map(mapContact);
    return [...contacts, ...apiContacts];
  };
const fetchUserContacts = async () => {
  const response = await fetch("https://randomuser.me/api/?seed=fullstackio");
  const userData = await response.json();
  return mapContact(userData.results[0]);
};
const fetchRandomContact = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const userData = await response.json();
  return mapContact(userData.results[0]);
};
let contacts = [];

const addContact = (contact) => {
    const mappedContact = mapContact(contact);
    contacts.push(mappedContact);
    return mappedContact;
  };
export { fetchContacts, fetchUserContacts, fetchRandomContact,addContact };
2;
