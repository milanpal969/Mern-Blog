import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom' 
import {Label, TextInput,Button, Alert} from 'flowbite-react'
import Oauth from '../Components/Oauth';

export default function Signup() {

  const [formdata , setdata] = useState({});
  const [errormessage, seterror]  = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate  = useNavigate()


  function handlechange(e){
    setdata({...formdata , [e.target.id] : e.target.value.trim()});
  }

  async function handlesubmit(e) {
    e.preventDefault();
    if (!formdata.username || !formdata.email || !formdata.password) {
        return seterror('Please fill all fields');
    }
   
    try {
      
        seterror(null);
        setLoading(true);
        
        const res = await fetch('http://localhost:3000/api/auth/signup', {
          
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formdata),
            mode:'no-cors',
        });
        const data = await res.json();
        console.log(data);
        setLoading(false);
        if (!res.ok) {
            const errorData = await res.json();
           
            throw new Error(errorData.message);
        }
        
        navigate('/signin');
    } catch(error) {
      
        seterror(error.message);
    }
}


  return (
    <div className=' flex  mx-auto mt-20 flex-col md:flex-row max-w-3xl gap-5'>
      <div className=' flex-1'>
      <Link to='/' className=' text-4xl font-bold dark:text-white' >
        <span className='px-2 py-1 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg'> Milan's</span> Blog
        </Link>
        <p className='mt-5'>This is a demo project enter your email and password to Signup</p>
        </div>

        <div className='flex-1'>


        <form onSubmit={handlesubmit}>
          <div>
            <Label value= 'your username'/>
            <TextInput type = 'text' placeholder = 'Username' id='username' onChange={handlechange}/>
          </div>
          <div >
            <Label value= 'your Email'/>
            <TextInput type = 'email' placeholder = 'email' id='email' onChange={handlechange}/>
          </div>
          <div >
            <Label value= 'your Password'/>
            <TextInput type = 'password' placeholder = '******' id='password' onChange={handlechange}/>
          </div>
          <Button className='mt-2 mx-auto w-[100%]' gradientDuoTone= 'purpleToPink' type='submit'>{loading ? <span>Loading...</span> : <span>Sign Up</span> }</Button>
          <Oauth/>
        </form>
        <div className=" text-sm mt-5 flex gap-2" >
          <span>Have an account? </span>

          <Link to='/signin' className='text-blue-500'>Sign In</Link>
        </div>
        {
          errormessage && (
            <Alert className = 'mt-5' color = 'failure'>
            {errormessage}
            </Alert>
          )
        }
        </div>
    </div>
  )
}
