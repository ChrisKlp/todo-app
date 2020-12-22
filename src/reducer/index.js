import arrayMove from 'array-move';

import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CHANGE_FILTER,
  CLEAR_COMPLETED_TODO,
  REORDER_LIST,
} from '../actions';

const initialState = {
  tasks: [
    {
      id: 1,
      text: 'Complete online JavaScript course',
      completed: false,
    },
    {
      id: 2,
      text: 'Jog around the park 3x',
      completed: false,
    },
    {
      id: 3,
      text: '10 minutes meditation',
      completed: false,
    },
    {
      id: 4,
      text: 'Read for 1 hour',
      completed: false,
    },
    {
      id: 5,
      text: 'Pick up groceries',
      completed: false,
    },
    {
      id: 6,
      text: 'Complete Todo App on Frontend Mentor',
      completed: false,
    },
  ],
  filter: 'All',
};

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== payload),
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: payload,
      };
    case CLEAR_COMPLETED_TODO:
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.completed),
      };
    case REORDER_LIST:
      return {
        ...state,
        tasks: arrayMove(state.tasks, payload.oldIndex, payload.newIndex),
      };
    default:
      return state;
  }
};

export default todos;
