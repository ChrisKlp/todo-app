import { useDispatch, useSelector } from 'react-redux';
import { filterTodo, ClearCompletedTodo } from '../../../actions';
import { getFiltredTodos } from '../../../helpers/getFiltredTodos';
import Filter from './Filter/Filter';
import style from './TodoFooter.module.scss';

const TodoFooter = () => {
  const { tasks, filter: activeFilter } = useSelector(state => state);
  const dispatch = useDispatch();

  const activeTasksCounter = getFiltredTodos(tasks, 'Active');

  const filters = ['All', 'Active', 'Completed'];

  const filterList = filters.map(filter => (
    <Filter
      key={filter}
      clickFn={() => dispatch(filterTodo(filter))}
      active={activeFilter === filter}
    >
      {filter}
    </Filter>
  ));

  return (
    <div className={style.footer}>
      <div className={style.footer__options}>
        <p
          className={style.footer__optionsCounter}
        >{`${activeTasksCounter.length} items Left`}</p>
        <button
          className={style.footer__optionsClearBtn}
          onClick={() => dispatch(ClearCompletedTodo())}
        >
          Clear Completed
        </button>
      </div>
      <div className={style.footer__nav}>{filterList}</div>
    </div>
  );
};

export default TodoFooter;
