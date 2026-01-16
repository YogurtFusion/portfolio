import Link from 'next/link'
import React from 'react'

const ProjectCta = () => {
  return (
    <section className=' mt-24  py-20 border-t border-neutral-200 bg-[#E4E2DD] mb-0! ' >
<div className="max-w-4xl mx-auto px-6 text-center">
    <span className='text-sm text-neutral-500 font-medium mb-6 block tracking-tight'>What's next?</span>
    <h2 className='text-4xl md:text-5xl font-serif text-neutral-900 mb-6 tracking-tight'>Have a project in mind?</h2>
    <p className='text-lg  text-neutral-600 mb-10 max-w-lg mx-auto leading-relaxed' >We're always interested in hearing about new challenges. Let's start a conversation.</p>

    <Link className='group inline-flex  items-center gap-3 bg-neutral-900 text-neutral-50 px-8 py-4 rounded-sm hover:bg-black transition-all duration-300 hover:-translate-y-1 ' href={"mailto:yellowglowstudios@gmail.com"}>
    <span className='text-sm font-bold tracking-wide'>Get in touch</span>
    <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
    </Link>
</div>
    </section>
  )
}

export default ProjectCta