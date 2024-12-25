import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [userData, setUserData] = useState({});

  
  const submitHandler = async (e) => {
    e.preventDefault()
    setUserData({
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    })
    // console.log(userData);
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-16 mb-7' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form onSubmit={submitHandler}>
      <h3 className='text-base font-medium mb-2'>What's our captain's Name?</h3>
      <div className='flex gap-4 mb-7'>
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
              <input
                required
                className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-base placeholder:text-base'
                type="text"
                placeholder='Last name'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

  

      <h3 className='text-base mb-2 font-medium'>What's your email address?</h3>
      <input 
      required 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className='bg-[#eeee] mb-7   rounded px-4 py-2 border w-full text-lg placeholder:text-base'
      type="email" 
      placeholder='example@email.com' />
      <h3 className='text-base mb-2 font-medium'>Enter your password</h3>

    <input 
    required 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
    type="password"
    placeholder='Password' />

      <button 
        className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'>
      Signup</button>

      <div className='mb-5 flex justify-center'>
      <p>Already Have a Account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </div>
      
      </form>
      </div>
      <div>
      <p className='text-[10px] leading-tight pb-2'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
      Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup