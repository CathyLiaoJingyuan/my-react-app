import React from "react";
import { Input, Button, List } from "antd";

const ToDoListUI = props => {
  return (
    <div style={{ margin: "10px" }}>
      <div>
        <Input
          placeholder="todo info"
          value={props.inputValue}
          style={{ width: "300px", margin: "10px" }}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleButtonClick}>
          Add to list
        </Button>
        <List
          style={{ width: "300px", margin: "10px" }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={index => props.handleItemDelete(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ToDoListUI;
