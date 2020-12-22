import style from './Filter.module.scss';

const Link = ({ active, children, clickFn }) => (
  <button
    className={`${style.filter} ${active && style.active}`}
    onClick={clickFn}
  >
    {children}
  </button>
);

export default Link;
