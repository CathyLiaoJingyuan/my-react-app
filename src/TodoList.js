import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button } from "antd";

class TodoList extends Component {
  render() {
    return (
      //   <Fragment>
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder="todo info"
            style={{ width: "300px", margin: "10px" }}
          />
          <Button type="primary">Add to list</Button>
        </div>
      </div>
      //   </Fragment>
    );
  }
}
export default TodoList;
