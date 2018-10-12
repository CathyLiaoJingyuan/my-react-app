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
    console.log("hi");
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  return state;
};
