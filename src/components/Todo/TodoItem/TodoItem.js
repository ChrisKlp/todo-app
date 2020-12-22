import TodoCheckbox from './TodoCheckbox/TodoCheckbox';
import { deleteTodo } from '../../../actions';
import { useDispatch } from 'react-redux';
import style from './TodoItem.module.scss';

const TodoItem = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <li className={style.todoItem}>
      <TodoCheckbox data={data} />
      <button
        className={style.todoItem__deleteButton}
        onClick={() => dispatch(deleteTodo(data.id))}
        aria-label="Delete task button"
      />
    </li>
  );
};

export default TodoItem;
