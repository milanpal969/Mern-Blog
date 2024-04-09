import React from 'react'
import {Button} from 'flowbite-react'
import {AiFillGoogleCircle} from 'react-icons/ai'

export default function () {

    async function handleGoogleClick(){

        
    }

  return (
     <Button className='w-[100%] my-4' type = 'button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
   <AiFillGoogleCircle className = 'my-auto w-5 h-5 mx-2' /> 
        Continue With Google
     </Button>
  )
}
