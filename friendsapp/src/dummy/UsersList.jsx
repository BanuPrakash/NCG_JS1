import React from "react";
export default function UsersList() {
    let [users, setUsers] = React.useState(null);
    // same as ComponentDidMount
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return <div>
        <h1>Users List </h1>
        {
            users && users.map(user => <User user={user} key={user.id} />)
        }
    </div>
}

function User(props) {
    let { id, name, email } = props.user;
    let [userId, setUserId] = React.useState(0);
    let [user, setUser] = React.useState(null);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + userId)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [userId]);

    return <div onMouseMove={() => setUserId(id)}>
        Name : {name} <br />
        Email: {email} <br />
        <Details user={user} />
    </div>
}

function Details({ user }) {
    return <div>
        <h1> Details </h1>
        {
            user && <div>
                Website: {user.website} <br />
                Phone : {user.phone} <br />
            </div>
        }
    </div>
}

//   ReactDOM.render(<UsersList />, document.getElementById("root"))