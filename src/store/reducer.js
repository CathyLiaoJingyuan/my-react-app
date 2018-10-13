const defualtState = {
  inputValue: "",
  list: []
};
// reducer  可以接受state， 但不能修改state
export default (state = defualtState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "add_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  if (action.type === "handle_item_delete") {
    console.log("deleting now");
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};
