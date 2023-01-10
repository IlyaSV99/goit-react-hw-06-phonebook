import { useState, useEffect,useRef } from 'react';
import { nanoid } from 'nanoid';
import { load, save } from './localeStorage/localeStorage';

import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState(null);
  const firstRender = useRef(true);
  
  useEffect(() => {
    const contacts = load('contactsList');

    if (contacts?.length) {
      setContacts([...contacts]);
    }
  }, []);
  useEffect(() => {
    if (!firstRender.current){
    save('contactsList', contacts)
    }
    else{
      firstRender.current=false;
    }
  }, [contacts])

  function handelFormSubmit(data) {
    const { name } = data;
    const sameName = contacts.some(el => el.name === name);

    sameName ? alert(`${name} is already in contacts.`) : setContacts(prevState => { return[...prevState, { id: nanoid(), ...data }]});

  }
  function handleFilterData(e) {
    const { value } = e.target;
    setFilter(value);
  }

  function getFilteredContacts() {
    if (!filter) {
      return contacts
    }
    const updContacts = contacts.filter(({name}) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return updContacts;
  }

  function removeContact(id) {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  
  }

  
  const filtredContacts = getFilteredContacts();

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={handelFormSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter title="Find contacts by name" filter={handleFilterData} />
        <ContactList contacts={filtredContacts} onClick={removeContact} />
      </Section>
    </>
  );
}
App.defaultProps = {
  contacts: [],
};
export default App;

