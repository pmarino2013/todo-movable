const initialState = {
  tasks: [],
};
function tareasReducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return [...tasks, { id: crypto.randomUUID, tarea: action.payload }];

    default:
      return state;
  }
}

export default tareasReducer;
