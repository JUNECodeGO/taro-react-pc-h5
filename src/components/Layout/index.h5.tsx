/** @format */

import {RouterProvider} from 'react-router-dom';
import {Suspense, createContext, useState} from 'react';
import router from './router';

interface IGlobalContext {
  isLogin: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const globalContext = createContext<IGlobalContext>({
  isLogin: JSON.parse(localStorage.getItem('isLogin') || 'false'),
  setLogin: () => {},
});

function Layout() {
  const [isLogin, setLogin] = useState<boolean>(() => {
    const storeValue = localStorage.getItem('isLogin');
    return storeValue ? JSON.parse(storeValue) : false;
  });

  return (
    <globalContext.Provider value={{isLogin, setLogin}}>
      <Suspense fallback={<div>loading...</div>}></Suspense>
      <RouterProvider router={router} />
    </globalContext.Provider>
  );
}

export default Layout;
