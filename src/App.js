import React from 'react';
import logo from '../public/logo192.png';
import style from './App.css';

const App = () => {
  return (
    <div className={style.app}>
      <div className={style.container}>
        <div className='image'>
          <img src={logo} className={style['app-logo']} alt='logo' />
        </div>
        <div className={style.title}>Ứng dụng đã chạy thành công</div>
        <div className={style.description}>
          Hãy viết ứng dụng của bạn bằng ReactJS
        </div>
        <div className={style['my-information']}>
          <a
            className={style['my-information__link']}
            href='https://facebook.com/op3616'
            target='_blank'
          >
            Facebook của tui
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
