import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {
        props.contactlist.map(contact => <ContactView 
          removeContact={props.removeContact} 
          contact={contact} key={contact.email}/>)
      }
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
