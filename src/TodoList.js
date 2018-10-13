import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from "./store/actionTypes";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder="todo info"
            value={this.state.inputValue}
            style={{ width: "300px", margin: "10px" }}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleButtonClick}>
            Add to list
          </Button>
          <List
            style={{ width: "300px", margin: "10px" }}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }

  handleInputChange(e) {
    //action 为对象
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    };
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleButtonClick() {
    const action = {
      type: ADD_TODO_ITEM
    };
    store.dispatch(action);
  }

  handleItemDelete(index) {
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // };
    //   store.dispatch(action);
    const action = {
      type: DELETE_TODO_ITEM,
      index
    };
    store.dispatch(action);
  }
}
export default TodoList;
