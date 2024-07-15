import './App.css';
import FriendsList from './components/FriendsList';
import Sample from './dummy/Sample';
import UsersList from './dummy/UsersList';

function App() {
  return (
    <div className="App">
     <h1>Friends List</h1>
     {/* <FriendsList /> */}
     <Sample />
    </div>
  );
}

export default App;
