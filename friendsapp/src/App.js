import './App.css';
import FriendsList from './components/FriendsList';
import UsersList from './dummy/UsersList';

function App() {
  return (
    <div className="App">
     <h1>Friends List</h1>
     {/* <FriendsList /> */}
     <UsersList />
    </div>
  );
}

export default App;
