import iconSun from '../../assets/icon-sun.svg';
import iconMoon from '../../assets/icon-moon.svg';
import { useState } from 'react';
import style from './Header.module.scss';

const Header = () => {
  const [isThemeDark, setIsThemeDark] = useState(true);

  const handleThemeChange = () => {
    document.documentElement.classList.toggle('themeLight');
    setIsThemeDark(prev => !prev);
  };

  return (
    <header className={`${style.header} ${!isThemeDark && style.lightHeader}`}>
      <div className={style.header__wrapper}>
        <h1 className={style.header__logo}>Todo</h1>
        <button
          className={style.header__themeToggleBtn}
          onClick={handleThemeChange}
          aria-label="Theme Toggle"
        >
          <img src={isThemeDark ? iconSun : iconMoon} alt="Theme Toggle Icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
