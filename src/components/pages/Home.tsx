import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-col justify-center mt-20 text-center gap-7'>
      <h1>Добро пожаловать!</h1>
      <span>Импортируйте существующий кошелек или создайте новый</span>
      <div className='flex justify-between w-1/4 mx-auto'>
        <button className='btn-primary'>Создать</button>
        <button className='btn-primary'>Импорт</button>
      </div>
    </div>
  );
};

export default Home;
