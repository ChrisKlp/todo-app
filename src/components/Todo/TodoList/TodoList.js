import { useDispatch, useSelector } from 'react-redux';
import { getFiltredTodos } from '../../../helpers/getFiltredTodos';
import TodoItem from '../TodoItem/TodoItem';
import style from './TodoList.module.scss';
import { orderList } from '../../../actions';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ value }) => (
  <TodoItem data={value} />
));

const SortableList = SortableContainer(({ items }) => (
  <ul className={style.todoList__content}>
    {getFiltredTodos(items.tasks, items.filter).map((todo, index) => (
      <SortableItem key={todo.id} index={index} value={todo} />
    ))}
  </ul>
));

const TodoList = () => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();

  return (
    <div className={style.todoList}>
      <SortableList
        items={store}
        onSortEnd={({ oldIndex, newIndex }) =>
          dispatch(orderList(oldIndex, newIndex))
        }
        helperClass={style.SortableHelper}
      />
    </div>
  );
};

export default TodoList;
