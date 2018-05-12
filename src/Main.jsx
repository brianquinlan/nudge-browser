import React, { Component } from 'react';
import Contact from './Contact.jsx';
import NewContact from './NewContact.jsx';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }

    this.updateContactsArr = this.updateContactsArr.bind(this);
  }

  updateContactsArr(obj) {
    this.state.contacts.push(obj);
  }

  componentDidMount() {
    const userId = window.localStorage.getItem('nudge_token');
    return fetch(`https://nudge-server.herokuapp.com/contacts/${userId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          contacts: responseJson.users
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.contacts !== nextState;
  }

  render() {
    const checkContacts = [];
    const cont = this.state.contacts.map((contact) => {
      checkContacts.push(contact);
      return <Contact contact={ contact } />;
    });

    return checkState.length ?
      <div className='contacts'>
        { cont }
      </div>
    :
    <NewContact updateContactsArr={ this.updateContactsArr } />;
  }
}