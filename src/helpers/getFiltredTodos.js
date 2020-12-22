export const getFiltredTodos = (todos, filter) => {
  switch (filter) {
    case 'All':
      return todos;
    case 'Active':
      return todos.filter(todo => !todo.completed);
    case 'Completed':
      return todos.filter(todo => todo.completed);
    default:
      throw new Error('Unknows filter:' + filter);
  }
};
