import React from 'react'
import {useNavigate} from 'react-router-dom';
import {Button} from 'flowbite-react'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import {app} from '../firebase.js'


export default function () {

  const navigate = useNavigate();

    async function handleGoogleClick(){

      const auth = getAuth(app)
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({prompt: 'select_account'});

      try{

        const googleResult = await signInWithPopup(auth, provider);
        const res = await fetch('http://localhost:3000/api/auth/google',  {
          method:"POST",
          headers:{'Content-type': 'application/json'},
          body:JSON.stringify({
            name:googleResult.user.displayName,
            email:googleResult.user.email,
            googlePhoto: googleResult.user.photoURL
          })
        })
        
        const data = await res.json();
        if(res.ok){
          navigate('/');
        }

      }catch(err){
        console.log('error is ', err);
      }
        
    }

  return (
     <Button className='w-[100%] my-4' type = 'button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
   <AiFillGoogleCircle className = 'my-auto w-5 h-5 mx-2' /> 
        Continue With Google
     </Button>
  )
}
