import { Component } from "react";
import Friend from "./Friend";
import friends from "../data";

export default class FriendsList extends Component {
  state = {
    friends
  }

  render() {
    return <div className="list">
        {
            this.state.friends.map(f => <Friend friend={f} key={f.id}/>)
        }
    </div>
  }
}