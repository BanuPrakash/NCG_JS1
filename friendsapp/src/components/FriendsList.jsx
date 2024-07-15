import { Component } from "react";
import Friend from "./Friend";
import friends from "../data";
import Search from "./Search";

// Organisms
export default class FriendsList extends Component {
    // friends; // state but no explict reconicllation
    state = {
        friends, // used to display
        friendsComplete: friends
    }

    constructor(props) {
        super(props);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.filterFriends = this.filterFriends.bind(this);
    }

    filterFriends(txt) {
        let frds = this.state.friendsComplete.filter(f => ((f.firstName.toUpperCase()
            .indexOf(txt.toUpperCase()) >= 0)) ||
            (f.lastName.toUpperCase()
                .indexOf(txt.toUpperCase()) >= 0));

        this.setState({
            friends: frds
        });
    }

    deleteCustomer(id) {
        let frds = this.state.friends.filter(f => f.id !== id);
        //this.state.friends = frds; // avoid this, state changes but reconicllation won't happen

        //async method to update state and reconcil
        this.setState({
            friends: frds
        }, () => console.log("new friends list", this.state.friends));

        // this.state.friends might not be updated
    }

    render() {
        return <div className="list">
            <Search filterEvt={this.filterFriends} />
            {
                this.state.friends.map(f => <Friend
                    delEvent={this.deleteCustomer}
                    friend={f}
                    key={f.id} />)
            }
        </div>
    }
}