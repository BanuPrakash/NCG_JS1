import { connect } from 'react-redux';
import './App.css';
import { useRef } from 'react';

function App(props) {
  let nameRef = useRef();
  let emailRef = useRef();

  function clearAllContacts() {
    props.clearContacts();
  }
  function addNewContact() {
    let contact = {
      name: nameRef.current.value,
      email: emailRef.current.value
    }
    props.addContact(contact);
  }
  return (
    <div className="App">
      {
        props.contactlist.map(contact => <ContactView
          removeContact={props.removeContact}
          contact={contact} key={contact.email} />)
      }

      <form>
        <button type="button" onClick={() => clearAllContacts()}>Clear</button> <br />
        Email : <input type="email" ref={emailRef} /> <br />
        Name : <input type="text" ref={nameRef} /> <br />
        <button onClick={() => addNewContact()}>Add Contact</button>
      </form>
    </div>
  );
}

function ContactView(props) {
  return <div>
    {props.email}, {props.name}
    <button onClick={() => props.removeContact(props.email)}>Delete</button>
  </div>
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


function mapStateToProps(state) {
  return {
    contactlist: state.contacts,
    profilePic: state.profile.avatar
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: (contact) => dispatch({ type: 'ADD_CONTACT', payload: contact }),
    removeContact: email => dispatch({ type: 'REMOVE_CONTACT', payload: email }),
    clearContacts: () => dispatch({ type: 'CLEAR_CONTACTS' })
  }
}
