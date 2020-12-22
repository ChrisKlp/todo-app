import { useDispatch } from 'react-redux';
import { toggleTodo } from '../../../../actions';
import style from './TodoCheckbox.module.scss';

const TodoCheckbox = ({ data: { id, text, completed } }) => {
  const dispatch = useDispatch();

  return (
    <div className={`${style.todo} ${completed && style.completed}`}>
      <button
        className={style.todo__checkbox}
        onClick={() => dispatch(toggleTodo(id))}
        aria-label="check button"
      />
      <p className={style.todo__name}>{text}</p>
    </div>
  );
};

export default TodoCheckbox;
