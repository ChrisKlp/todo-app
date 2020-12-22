export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CLEAR_COMPLETED_TODO = 'CLEAR_COMPLETED_TODO';
export const REORDER_LIST = 'REORDER_LIST'

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    id: Math.floor(Math.random() * 1234),
    text,
    completed: false,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: id,
});

export const filterTodo = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export const ClearCompletedTodo = () => ({
  type: CLEAR_COMPLETED_TODO,
});

export const orderList = (oldIndex, newIndex) => ({
  type: REORDER_LIST,
  payload: {oldIndex, newIndex}
})