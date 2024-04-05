import React from 'react'
import { Link } from 'react-router-dom'
import {Footer} from 'flowbite-react'
export default function FooterComp() {
  return (
    <Footer  container className = 'border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto mt-5'>
        <div>
            <Link to='/' className='self-centered text-sm sm:text-xl font-semibold dark:text-white' >
        <span className='px-2 py-1 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg'> Milan's</span> Blog
        </Link>  
            </div>
            <div className='grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                <Footer.Title title='About'/>
               
                <Footer.LinkGroup col>
                    <Footer.Link
                    href='https://www.youtube.com/watch?v=Kkht2mwSL_I&t=5946s'
                    target='_blank'
                    rel='noopener noreferrer'>
                            youtude
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title='Follow Us'/>
                
                
               <Footer.LinkGroup col>
                   <Footer.Link
                   href='https://www.youtube.com/watch?v=Kkht2mwSL_I&t=5946s'
                   target='_blank'
                   rel='noopener noreferrer'>
                          LinkedIn
                   </Footer.Link>
                   <Footer.Link
                   href='https://www.youtube.com/watch?v=Kkht2mwSL_I&t=5946s'
                   target='_blank'
                   rel='noopener noreferrer'>
                           Instagram
                   </Footer.Link>
               </Footer.LinkGroup>
               </div>
            </div>
        </div>

    </Footer>
  )
}
