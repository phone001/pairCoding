import Main from './components/page/Main';
import { Routes, Route } from 'react-router-dom'
import Login from './components/page/Login';
import SignUp from './components/page/SignUp';
import Footer from './components/page/Footer';
import Header from './components/page/Header';
import { createContext, useEffect, useReducer, useState } from 'react';

export const Auth = createContext();

function App() {

  const init = {
    users: [],
    login: false
  }

  const reducer = (state, action) => {
    const { type, payload } = action;

    if (type === "login") {
      return { ...state, login: true }
    } else if (type === "logout") {
      return { ...state, login: false }
    } else if (type === "signup") {
      return { ...state, users: [...state.users, payload.user] }
    } else return state
  }

  const [state, dispatch] = useReducer(reducer, init);
  const obj = { state, dispatch }

  useEffect(() => {
    console.log(state.users);
  }, [state.login])

  return (
    <div className="App">
      <Auth.Provider value={obj} >
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
        <Footer />
      </Auth.Provider>
    </div>
  );
}

export default App;
