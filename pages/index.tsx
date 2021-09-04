import { NextPage } from 'next';
import Head from 'next/head';
import router from 'next/router';
import { BaseSyntheticEvent, FormEvent, useState } from 'react';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    setError('');
    e.preventDefault();
    if (!username) {
      setError('Username is required');
      return false;
    }
    router.push(`/card/${username}`);
  };
  return (
    <div>
      <Head>
        <title>Hashnode Card Generator: Developed by Ashik and Lalit</title>
      </Head>
      <Header />
      <main className='my-10 mx-5 flex flex-col items-center'>
        <h1 className='sm:text-5xl text-4xl font-extrabold text-center md:mt-20 mt-8'>
          Hashnode Author Card
        </h1>
        <p className='text-gray-700 mt-5 text-center max-w-lg'>
          Generate awesome personalized cards which you can showcase to the
          community that contains all your awesome achievements on Hashnode
        </p>
        <form
          onSubmit={onSubmit}
          className='flex flex-col items-center my-10 shadow-lg border gap-2 rounded p-4 w-full max-w-lg'
        >
          <label htmlFor='username'>Hashnode Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={
              'border rounded block w-full p-3 ' + (error && 'border-red-500 ')
            }
            placeholder='Enter you hashnode username'
          />
          <p className='self-start text-sm text-red-500'>{error && error}</p>
          <button
            className={
              'flex gap-2 hover:bg-blue-700 items-center w-full justify-center bg-brand text-white py-3 rounded'
            }
          >
            <span className='text'>Generate Hashnode Card</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-arrow-right w-5 h-5'
            >
              <line x1='5' y1='12' x2='19' y2='12'></line>
              <polyline points='12 5 19 12 12 19'></polyline>
            </svg>
          </button>
        </form>
      </main>
      <footer className='flex justify-center'>
        Made with <span className='text-red-500 px-1'>&hearts;</span> by
        <a href='https://github.com/projectashik'>&nbsp;Ashik Chapagain</a>
        &nbsp;and
        <a href='https://github.com/lalit2005'>&nbsp;Lalit Kishore</a>
      </footer>
    </div>
  );
};

export default Home;
