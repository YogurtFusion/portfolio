import React from 'react'

const CtaBtn = () => {
  return (
    <button className='group flex items-center justify-center bg-[#121212] py-5 px-10 transition-colors duration-300 hover:bg-neutral-900'>
      <span className='relative uppercase text-lg text-[#F4F4F0] tracking-[0.2em] font-medium'>
        Get in touch
        
        {/* Underline Animation */}
        <span className='absolute bottom-0 left-0 h-[2px] w-full bg-amber-50 origin-left transform scale-x-0 transition-transform duration-300 ease-out will-change-transform group-hover:scale-x-100'></span>
      </span>
    </button> 
  )
}

export default CtaBtn;