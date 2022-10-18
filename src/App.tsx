import React, { useEffect } from 'react';
import './app.css';
import { baseTheme } from './themes/base';
import { darkTheme } from './themes/dark';
import { applyTheme } from './themes/utils';

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  return (
    <div className='bg-primary-400 h-[100vh]'>
      <header className='bg-secondary-400 h-[100px]'>
        <h1 className='text-body-700'>TEST</h1>
      </header>
      <button onClick={() => applyTheme(baseTheme)} className='text-body-400'>
        Base theme
      </button>
      <button onClick={() => applyTheme(darkTheme)} className='text-body-400'>
        Dark theme
      </button>
    </div>
  );
}

export default App;
