import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      //   <Fragment>
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder="todo info"
            value={this.state.inputValue}
            style={{ width: "300px", margin: "10px" }}
          />
          <Button type="primary">Add to list</Button>
          <List
            style={{ width: "300px", margin: "10px" }}
            bordered
            dataSource={this.state.list}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
      //   </Fragment>
    );
  }
}
export default TodoList;
