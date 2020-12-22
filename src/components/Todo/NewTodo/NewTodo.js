import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../actions';
import style from './NewTodo.module.scss';

const NewTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => setInputValue(value);

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue === '') {
      return;
    }
    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.newTodo} autoComplete="off">
      <div className={style.newTodo__checkBorder} />
      <input
        className={style.newTodo__input}
        type="text"
        value={inputValue}
        name="newTodo"
        onChange={handleChange}
        placeholder="Create a new todo…"
        aria-label="Task name"
      />
    </form>
  );
};

export default NewTodo;
