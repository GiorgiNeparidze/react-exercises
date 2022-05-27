import React, { Component } from "react";

export default class ToDoList extends Component {
  state = {
    listItems: ["john"],
  };

  SubmitEvent = (event) => {
    event.preventDefault();

    const newItem = event.target.elements.newEl.value;
    const listItemsArr = this.state.listItems;

    listItemsArr.push(newItem);

    this.setState({
      listItems: listItemsArr,
    });

    event.target.elements.newEl.value = "";
  };

  HandleResset = (event) => {
    event.preventDefault();
    this.setState({
      listItems: [],
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <form onSubmit={this.SubmitEvent}>
          <input
            type="text"
            placeholder="Type new item and press to Add button below."
            name="newEl"
          />
          <button>Add</button>
        </form>
        <button onClick={this.HandleResset}>Reset</button>
      </div>
    );
  }
}
