import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';

class App extends Component {
  state = { contacts: [], filter: '' };

  deleteContact = id => {
    const contactsAfterDelete = this.state.contacts.reduce((acc, contact) => {
      return contact.id !== id ? [...acc, contact] : acc;
    }, []);
    this.setState({ contacts: contactsAfterDelete });
  };

  isContactAlreadySaved = name => {
    return this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  };

  updateContacts = (name, number) => {
    if (this.isContactAlreadySaved(name)) {
      return alert(`${name} is already in contacts.`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, { id: nanoid(), name, number }],
        };
      });
    }
  };

  updateFilter = value => {
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className="App">
        <h1 className="phonebookTitle">Phonebook</h1>
        <ContactForm changeContacts={this.updateContacts} />

        <h2 className="contactsTitle">Contacts</h2>
        <Filter filter={filter} changeFiler={this.updateFilter} />
        <ContactList contacts={contacts} filter={filter} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
