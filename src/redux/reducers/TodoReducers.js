const initialState = {
   todos: [],
};

const TodoReducers = (state = initialState, action) => {
   switch (action.type) {

      case "GET_TODOS":
         return { todos: action.payload }

      case "ADD_TODO":
         return {
            ...state
         }

      case "REMOVE_TODO":
         const newArr = state.todos.filter((todo) => todo.id !== action.payload);
         return { ...state, todos: newArr};

      case "UPDATE_TODO":
         const updated = state.todos.map(ele => {
            if (ele.id === action.editedValue.id) {
               return {...ele, title: action.editedValue.title, description: action.editedValue.description}
            }
            return ele
         })
         return { ...state, todos: updated}

      default: return state;
   }
}

export default TodoReducers;