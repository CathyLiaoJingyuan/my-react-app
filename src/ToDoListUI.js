import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

class ToDoListUI extends Component {
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder="todo info"
            value={this.props.inputValue}
            style={{ width: "300px", margin: "10px" }}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleButtonClick}>
            Add to list
          </Button>
          <List
            style={{ width: "300px", margin: "10px" }}
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item onClick={index => this.props.handleItemDelete(index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default ToDoListUI;
