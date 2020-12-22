import style from './Todo.module.scss';
import NewTodo from './NewTodo/NewTodo';
import TodoList from './TodoList/TodoList';
import TodoFooter from './TodoFooter/TodoFooter';
// import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {

  // const dispatch = useDispatch()
  // const state = useSelector(state => state)

  return (
    <section className={style.todo}>
      <NewTodo />
      <TodoList/>
      <TodoFooter />
      <p className={style.todo__footer}>Drag and drop to reorder list</p>
    </section>
  );
}

export default Todo;
