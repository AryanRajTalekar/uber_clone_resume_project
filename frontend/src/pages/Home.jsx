import React,{useState,useRef} from 'react';
import {useGSAP} from '@gsap/react';
import  gsap  from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanelOpen, setvehiclePanelOpen] = useState(false)
  const vehiclePanelRef = useRef('')
  const [ConfirmRidePanel, setConfirmRidePanel] = useState(false)
  const confirmRidePanelRef = useRef('')
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef('')
  const [ waitingForDriver, setWaitingForDriver ] = useState(false)
  const waitingForDriverRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function () {
    if (panelOpen) {
        gsap.to(panelRef.current, {
            height: '70%',
            padding: 24
            // opacity:1
        })
        gsap.to(panelCloseRef.current, {
            opacity: 1
        })
    } else {
        gsap.to(panelRef.current, {
            height: '0%',
            padding: 0
            // opacity:0
        })
        gsap.to(panelCloseRef.current, {
            opacity: 0
        })
    }
}, [ panelOpen ])

  useGSAP(()=>{
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanelOpen]);


  useGSAP(()=>{
    if(ConfirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)'
      })
      gsap.to(vehiclePanelRef.current,{
        opacity:0
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ConfirmRidePanel]);

  useGSAP(()=>{
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)'
      })
      gsap.to(confirmRidePanelRef.current,{
        opacity:0
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound]);

  useGSAP(function () {
    if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(waitingForDriverRef.current, {
            transform: 'translateY(100%)'
        })
    }
}, [ waitingForDriver ])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img  className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div  className='h-screen w-screen'>
        <img className='h-[70%] w-full object-cover' src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584820445-6MHFT7HI6MHUED46VYU4/Two+Maps+-+Color.png" alt="" />
      </div>
      <div className='h-screen flex flex-col justify-end absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
        <h5 ref={panelCloseRef} onClick={() => {
                        setpanelOpen(false)
                    }} className='absolute opacity-0 right-6 top-6 text-2xl'>
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
        
        <h4 className='text-2xl font-bold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e);
          }}>
          <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
          <input 
          onClick={()=>setpanelOpen(true)}
          value={pickup}
          onChange={(e)=>{
            setPickup(e.target.value);
          }}
          className='bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-5' 
          type="text" 
          placeholder='Add a pick-up Location' 
          />
          <input 
          onClick={()=>setpanelOpen(true)}
          value={destination}
          onChange={(e)=>{
            setDestination(e.target.value);
          }}
          className='bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-3' 
          type="text" 
          placeholder='Enter your destination' 
          />
        </form>
        </div>
        <div ref={panelRef} className='h-[70%] bg-white h-0 '>
          <LocationSearchPanel setpanelOpen={setpanelOpen} setvehiclePanelOpen={setvehiclePanelOpen}/>
        </div>
      </div>

      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setvehiclePanelOpen={setvehiclePanelOpen} />
      </div>

      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
        <ConfirmRide setVehicleFound={setVehicleFound} setConfirmRidePanel={setConfirmRidePanel} />
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
            <LookingForDriver setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitingForDriverRef} className='fixed w-full  z-10 bottom-0  bg-white px-3 py-6 pt-12'>
                <WaitingForDriver
                    // ride={ride}
                    setVehicleFound={setVehicleFound}
                    setWaitingForDriver={setWaitingForDriver}
                    waitingForDriver={waitingForDriver} />
            </div>

    </div>
  )
}

export default Home