import { Component } from "react";
import Friend from "./Friend";
import friends from "../data";

export default class FriendsList extends Component {
  state = {
    friends
  }

  deleteCustomer(id) {
    let frds = this.state.friends.filter(f => f.id !== id);
    //this.state.friends = frds; // avoid this, state changes but reconicllation won't happen
    
    //async method to update state and reconcil
    this.setState({
        friends : frds
    })
}

  render() {
    return <div className="list">
        {
            this.state.friends.map(f => <Friend 
                delEvent = {(id) => this.deleteCustomer(id)}
                friend={f} 
                key={f.id}/>)
        }
    </div>
  }
}