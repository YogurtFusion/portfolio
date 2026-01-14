import React from 'react'
import SectionBtn from './ui/SectionBtn'

const Projects = () => {
  return (
<section className='p-12' >
    <div className="project-head flex justify-between items-end  ">
        <div className="flex flex-col gap-3 ">

        <p className='' style={{fontSize:"var(--fs-sub-head)", color: "var(--c-sub-head) " }} >Selected work</p>
        <h1 className='' style={{ color:"var(--c-h1) " ,fontSize:"var(--fs-head)", lineHeight:"var(--lh-h1)",letterSpacing: "var(--ls-p) " } } >Projects we're </h1>
        <h1 className='' style={{ color:"var(--c-h1) " ,fontSize:"var(--fs-head)", lineHeight:"var(--lh-h1)",letterSpacing: "var(--ls-p) " } } >proud of</h1>
        </div>
        <SectionBtn/>
    </div>
    <div className="cards h-screen">
<div className="card">

</div>
    </div>
</section>  
)
}

export default Projects