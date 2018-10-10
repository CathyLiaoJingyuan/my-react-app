import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
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
            onChange={this.handleInputChange}
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
  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    };
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState);
  }
}
export default TodoList;
