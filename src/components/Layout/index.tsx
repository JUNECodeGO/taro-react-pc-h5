/** @format */

import {Suspense, createContext, useState} from 'react';

interface IGlobalContext {
  isLogin: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const globalContext = createContext<IGlobalContext>({
  isLogin: false,
  setLogin: () => {},
});

function Layout(props) {
  const [isLogin, setLogin] = useState<boolean>(false);

  return (
    <globalContext.Provider value={{isLogin, setLogin}}>
      <Suspense fallback={<div>loading...</div>}></Suspense>
      {props.children}
    </globalContext.Provider>
  );
}

export default Layout;
