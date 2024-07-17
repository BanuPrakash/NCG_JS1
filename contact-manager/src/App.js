import { connect } from 'react-redux';
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
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
