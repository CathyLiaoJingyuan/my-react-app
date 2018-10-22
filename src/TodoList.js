import React, { Component } from "react";
import store from "./store";
import TodoListUI from "./ToDoListUI";
import "antd/dist/antd.css";
import {
  getInitList,
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
  // getTodolist
} from "./store/actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);

    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        onClick={this.onClick}
        list={this.state.list}
        handleButtonClick={this.handleButtonClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }

  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);

    //use thunk
    // const action = getTodolist();
    // store.dispatch(action);

    //不使用中间件
    // axios.get("/todolist.json").then(function(response) {
    //   const data = response.data;
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // });
  }

  handleInputChange(e) {
    //action 为对象
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleButtonClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction();

    store.dispatch(action);
  }
}
export default TodoList;
