import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"
import Me from '../../assets/image/me.svg'

const myName = 
  <div> 
    <TypeAnimation
      sequence={ ['FrontEnd', 1000, 'Backend', 1000] }
      wrapper="span"
      style={ {color:'#F1820F'} }
      repeat={ Infinity }
    />
  </div>
function Home () {
  return(
      <div className='flex justify-center items-center w-full h-screen '>
          <motion.div className='w-fit space-y-7 text-left font-semibold font-poppins'
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{x:[200,-50], opacity: 1, scale: 1 }}
                  transition={{type: "spring", stiffness: 20,delay:1}}
          >
            <div className='text-6xl'>
              <h1>Hi, I'am Alifano</h1>
              <div >
              <div>{myName}</div>
              <h1>Web Developer</h1>
              </div>
            </div>
            <p className='text-xl text-[#7E7E7E]'>"There is no rest for me in this world, Perhaps in the next"</p>
          </motion.div>
          <motion.div
            initial={{ opacity:[0,0], scale: 1 }}
            animate={{x:[-250,-250,50],opacity: 1, scale: 1 }}
            transition={{type: "spring", stiffness: 100,duration:1.5}}
          >
            <img src={ Me } alt='me'/>
          </motion.div>

      </div>
  )
}
export default Home