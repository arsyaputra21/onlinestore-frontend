import Link from 'next/link';
import { useHistory } from 'react-router-dom';

import React, { useState, useContext } from 'react';
import { Context } from '../store/AppContext';
import { useRouter } from 'next/router';

const login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    actions.login(email, password); //.then(() => {
    //   router.push('/');
    // });
  };

  if (store.token && store.token != '' && store.token != undefined) {
    actions.fetchUser();
    router.push('/');
  }
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-pink-200 to-pink-500 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-white font-roboto pb-2">
        Zona Buku
      </h1>
      {store.token && store.token !== '' && store.token !== undefined ? (
        <Link href="/">Lanjut</Link>
      ) : (
        <div className='border-indigo-400 border-2 rounded-xl w-6/12 md:py-6 md:w-4/12 flex flex-col items-center gap-5 px-3 py-5 bg-white shadow-2xl"'>
          <h2 className="text-indigo-800 row-span-1 font-bold text-2xl md:text-4xl">
            Login
          </h2>
          <div className="row-span-3 md:w-8/12 grid grid-rows-3 gap-3 md:gap-5">
            <div className="flex justify-center flex-col">
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                placeholder="Enter E-mail"
                name="email"
                className="border-black w-100 border-2 rounded-xl p-1"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="border-black w-100 border-2 rounded-xl p-1"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
              className="bg-indigo-800 rounded-xl text-white font-bold"
            >
              Masuk
            </button>
            <Link className="" href="/daftar">
              <button>Daftar</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default login;
