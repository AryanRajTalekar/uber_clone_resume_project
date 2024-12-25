import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler =(e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };
    setUserData(newUser);
    console.log(userData); 
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  };

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={submitHandler}>
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
      <p>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      
      </form>
      </div>
      <div>
        <Link
        to='/captain-login'
        className='bg-[#ffbb00] flex justify-center items-center text-white font-semibold mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'>
        Login as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin