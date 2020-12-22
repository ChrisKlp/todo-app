import style from './Todo.module.scss';
import NewTodo from './NewTodo/NewTodo';
import TodoList from './TodoList/TodoList';
import TodoFooter from './TodoFooter/TodoFooter';

const Todo = () => (
  <div className={style.todo}>
    <NewTodo />
    <TodoList />
    <TodoFooter />
    <p className={style.todo__footer}>Drag and drop to reorder list</p>
  </div>
);

export default Todo;
