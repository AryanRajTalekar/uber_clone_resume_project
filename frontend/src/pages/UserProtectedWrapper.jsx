import React,{useContext,useEffect,useState}from 'react'
import {UserDataContext} from '../context/userContext.jsx'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const UserProtectedWrapper = ({
    children
}) => {


    const token = localStorage.getItem('token');
    const navigate = useNavigate()
    const {user,setUser} = useContext(UserDataContext);
    const {isLoading,setIsLoading} = useState(true);

    useEffect(()=>{
        if(!token){
            navigate('/login')
        }
    },[token])

    axios.get(`${import.meta.env.VITE_API_URL}/users/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then(()=>{
        if(Response.status===200){
            setUser(Response.data.user);
            setIsLoading(false);
        }
    }).catch(error=>{
        console.log(error);
        localStorage.removeItem('token');
        navigate('/user-login');
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