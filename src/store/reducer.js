const defualtState = {
  inputValue: "123",
  list: ["qw", "his"]
};

export default (state = defualtState, action) => {
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  return state;
};
