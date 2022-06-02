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

  HandleRemove = (i) => {
    const listItemsArr = this.state.listItems;
    listItemsArr.splice(i, 1);
    this.setState({
      listItems: listItemsArr,
    });
  };

  render() {
    return (
      <div>
        <div>
          <ul>{this.props.render(this.state.listItems, this.HandleRemove)}</ul>
        </div>
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
