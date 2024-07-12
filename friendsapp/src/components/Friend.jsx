import { Component } from "react";

export default class Friend extends Component {
    render() {
        let {id, firstName, lastName} = this.props.friend;
        return <div className="row">
            {firstName}  {lastName} &nbsp; 
            <button type="button">&times;</button>
        </div>
    }
}