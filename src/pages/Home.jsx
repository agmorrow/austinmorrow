import React from 'react'
//import LightLogo from '../assets/brand/light-logo.png'
import DarkLogo from '../assets/brand/dark-logo.png'


const Home = () => {
  return (
<section className='min-h-screen bg-white_base dark:bg-black_base duration-100'>
<div>
  <div className='flex items-center'>
   <img src={DarkLogo} alt='Austin Morrow' className='w-auto h-24 dark:inverted' />
   <div className='dark:text-white_base'>Austin Morrow</div>
  </div>
  <div className='fixed top-5 right-10 duration-10 dark:bg-slate-800 bg-gray-100 rounded'>
    <button className='w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600'>
    <span class="material-symbols-outlined">
light_mode
</span>
    </button>
  </div>
</div>

</section>

    )
  }

  export default Home