import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {CaptainDataContext} from '../context/captainContext';

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {captain,setCaptain} = useContext(CaptainDataContext);
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captain = ({
      email:email,
      password:password
    });
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/captains/login`, captain);
  if(response.status === 200){
    const data = response.data;
    setCaptain(data.Captain);
    localStorage.setItem('token',data.token);
    navigate('/captain-home');
  }

    // console.log(captainData);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form onSubmit={handleSubmit}>
      <h3 className='text-xl mb-2 font-medium'>What's your email address?</h3>
      <input 
      required 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
      type="email" 
      placeholder='example@email.com' />

      <h3 className='text-xl mb-2 font-medium'>Enter your password</h3>

      <input 
      required 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
      type="password"
       placeholder='Password' />
  

      <button 
        className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
      Login</button>

      <div className='mb-5 flex justify-center'>
      <p>Join a Fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </div>
      
      </form>
      </div>
      <div>
        <Link
        to='/login'
        className='bg-[#f57e1d] flex justify-center items-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
        Signin as User</Link>
      </div>
    </div>
  )

}

export default CaptainLogin