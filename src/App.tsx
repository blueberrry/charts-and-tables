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
    <div className='bg-primary h-[100vh]'>
      <header className='bg-secondary h-[100px]'>
        <h1 className='text-text-base'>TEST</h1>
      </header>
      <button onClick={() => applyTheme(baseTheme)} className='text-text-base'>
        Base theme
      </button>
      <button onClick={() => applyTheme(darkTheme)} className='text-text-base'>
        Dark theme
      </button>
    </div>
  );
}

export default App;
