import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        name: ''
    }

    changeWithInput = (event) => {
        const inpName = event.target.value

        this.setState ({
            name: inpName
        })
    }

    render () {
        return (
        <div>
            <input onChange={this.changeWithInput} name="name" value={this.state.name}></input>
            <Welcome name={this.state.name}/>
        </div>
    )}
}