import React from 'react'
import { Link } from 'react-router-dom' 
import {Label, TextInput,Button} from 'flowbite-react'


export default function Signup() {
  return (
    <div className=' flex  mx-auto mt-20 flex-col md:flex-row max-w-3xl gap-5'>
      <div className=' flex-1'>
      <Link to='/' className=' text-4xl font-bold dark:text-white' >
        <span className='px-2 py-1 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg'> Milan's</span> Blog
        </Link>
        <p className='mt-5'>This is a demo project enter your email and password to Signup</p>
        </div>

        <div className='flex-1'>
        <form>
          <div >
            <Label value= 'your username'/>
            <TextInput type = 'text' placeholder = 'Username' id='username'/>
          </div>
          <div >
            <Label value= 'your Email'/>
            <TextInput type = 'text' placeholder = 'email' id='email'/>
          </div>
          <div >
            <Label value= 'your Password'/>
            <TextInput type = 'text' placeholder = 'Password' id='pass'/>
          </div>
          <Button className='mt-2 mx-auto w-[100%]' gradientDuoTone= 'purpleToPink' type='submit'>Sing up</Button>
        </form>
        <div className=" text-sm mt-5 flex gap-2" >
          <span>Have an account? </span>
          <Link to='/signup' className='text-blue-500'>Sign up</Link>
        </div>
        </div>
    </div>
  )
}
