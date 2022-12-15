import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Me from '../../assets/image/me.svg'

const myName = 
  <div> 
    <TypeAnimation
      sequence={['FrontEnd', 1000, 'Backend', 1000]}
      wrapper="span"
      style={{color:'#F1820F'}}
      repeat={Infinity}
    />
  </div>
function Home () {
  return(
      <div className='flex justify-center w-screen h-screen items-center space-x-10'>
        <div className='w-fit space-y-7 text-left font-semibold font-poppins'>
          <div className='text-6xl'>
            <h1>Hi, I'am Alifano</h1>
            <div >
             <div>{myName}</div>
             <h1>Web Developer</h1>
            </div>
          </div>
          <p className='text-xl text-[#7E7E7E]'>"There is no rest for me in this world, Perhaps in the next"</p>
        </div>
          <img src={ Me } alt='me'/>
      </div>
  )
}
export default Home