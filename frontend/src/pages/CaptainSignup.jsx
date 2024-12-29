import React, { useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import {CaptainDataContext} from '../context/captainContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')

  

  const { captain,setCaptain } =useContext(CaptainDataContext);
  const navigate = useNavigate()
  
  const submitHandler = async (e) => { 
    e.preventDefault()
    const CaptainData = ({
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    })

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/captains/register`, CaptainData);

      if(response.status === 201){
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token',data.token);
        navigate('/captain-Home');
        }


    // console.log(CaptainData);
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }

  return (
    <div className='p-5 flex flex-col justify-between h-screen'>
      <div>
      <img className='w-16 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
      <form onSubmit={submitHandler}>
      <h3 className='text-base font-medium mb-2'>What's our Captain's Name?</h3>
      <div className='flex gap-4 mb-5'>
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

  

      <h3 className='text-base mb-2 font-medium'>What's our Captain's Email?</h3>
      <input 
      required 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className='bg-[#eeee] mb-5   rounded px-4 py-2 border w-full text-lg placeholder:text-base'
      type="email" 
      placeholder='example@email.com' />
      <h3 className='text-base mb-2 font-medium'>Enter your password</h3>

    <input 
    required 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className='bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
    type="password"
    placeholder='Password' />

<h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">AutoRickshaw</option>
              <option value="moto">MotorCycle</option>
            </select>
          </div>

      <button 
        className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'>
      Create Captain's Account</button>

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