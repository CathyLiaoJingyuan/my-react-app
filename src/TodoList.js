import React, { Component, Fragment } from 'react';
import TodoItem from "./TodoItem.js"
import "./style.css"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }
    render() {
        return (
            <Fragment>

                <div>
                    <label htmlFor="insertArea">Add</label>
                    <input
                        id="insertArea"
                        className="input"
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>
                        Add to List
                </button>
                </div>
                <ul>{
                    this.state.list.map((item, index) => {
                        return (
                            <TodoItem content={item} index={index} deleteItem={this.handleItemDelete} />
                        )
                    })
                }
                </ul>
            </Fragment>
        )

    }


    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => {
            return {
                inputValue: value
            }
        });

    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        });

    }

    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(list[index], 1);
        this.setState({
            list: list
        });
    }

}
export default TodoList;