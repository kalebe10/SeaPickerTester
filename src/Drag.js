import React, { Component } from "react";
import { Draggable, Droppable } from "react-drag-and-drop";

class DragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      customerList: fetch("/api/customers")
        .then((res) => res.json())
        .then((res) => this.setState({ customerList: res }))
        .catch((err) => console.log(err)),
      customerList2: []
    };
  }

  onDrop(data) {
    // => banana
    let temp = this.state.customerList2.concat(data.fruit);

    this.setState({ customerList2: temp });
    console.log(temp);
  }
  render() {
    return (
      <div>
        <ul style={{ border: "1px solid" }}>
          {this.state.customerList.map((item, index) => {
            console.log(item);
            return (
              <li key={index}>
                <Draggable type="fruit" data={item}>
                  <li>{item}</li>
                </Draggable>
              </li>
            );
          })}
        </ul>
        <Droppable
          types={["fruit"]} // <= allowed drop types
          onDrop={this.onDrop.bind(this)}
        >
          <ul
            className="Smoothie"
            style={{ border: "1px solid", minHeight: "50px" }}
          >
            {this.state.customerList2.map((item, index) => {
              console.log(item);
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </Droppable>
      </div>
    );
  }
}

export default DragAndDrop;
