import React,{useContext,useEffect,useState}from 'react'
import {CaptainDataContext} from '../context/captainContext.jsx'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const UserProtectedWrapper = ({
    children
}) => {


    const token = localStorage.getItem('token');
    const navigate = useNavigate()
    const {captain,setCaptain} = useContext(CaptainDataContext);
    const {isLoading,setIsLoading} = useState(true);

    useEffect(()=>{

    
        if(!token){
            navigate('/captain-login')
        }
    },[token])

    axios.get(`${import.meta.env.VITE_API_URL}/captains/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then(()=>{
        if(Response.status===200){
            setCaptain(Response.data.captain);
            setIsLoading(false);
        }
    }).catch(error=>{
        console.log(error);
        localStorage.removeItem('token');
        navigate('/captain-login');
    })

    if(isLoading){
        return (
            <div>
                Loading...
            </div>
        )
    }


    return (
        <>
            {children}
        </>
    )
  
}

export default UserProtectedWrapper