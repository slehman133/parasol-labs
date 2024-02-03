import React from 'react'
import Image from 'next/image'



export async function generateMetadata() {
    return {
        title: 'The Team at Parasol Labs',
    }
}

//developed
//Written by Nicholas Whitehorn

const TeamPage = () => {
    return (
        <>
            <div className = "px-48 py-16">
                <div className="flex flex-col py-8 px-24 bg-slate-300">
                    <div className='flex flex-row border-solid border-2 border-black rounded-lg p-4 hover:ring-4'>
                        <div className='flex basis-2/12 py-8'>
                            <figure>
                                <Image
                                    src="/images/AhmedPic.jpg"
                                    alt='Member Image'
                                    width = "200"
                                    height = "200"
                                />                        
                            </figure>
                        </div>
                        <div className='flex flex-col gap-4 basis-10/12'>
                            <h2 className='px-8 text-3xl'>Ahmed Munoz</h2>
                            <p className='px-16 text-lg'>Innovative and driven IT consultant with proven leadership experience in architecture, infrastructure, solutions delivery, IT Operations, enterprise security, project management, hyper-converged systems, vendor relations, and agile/waterfall development workflows. Recognized for working on the bleeding edge of technology to promote individual development, optimize business processes, increase profitability, boost productivity, and enhancing team cohesion while reducing overhead.Innovative and driven IT consultant with proven leadership experience in architecture, infrastructure, solutions delivery, IT Operations, enterprise security, project management, hyper-converged systems, vendor relations, and agile/waterfall development workflows. Recognized for working on the bleeding edge of technology to promote individual development, optimize business processes, increase profitability, boost productivity, and enhancing team cohesion while reducing overhead.</p>
                        </div>
                    </div>  
                </div>
                <div className="flex flex-col py-8 px-24 bg-slate-300 ">
                    <div className='flex flex-row border-solid border-2 border-black rounded-lg p-4 hover:ring-4'>
                        <div className='flex flex-col gap-4 basis-10/12'>
                            <h2 className='px-8 text-3xl'>Name</h2>
                            <p className='px-16 text-lg'>Description</p>
                        </div>
                        <div className='flex basis-2/12 py-8'>
                            <figure>
                                <Image
                                    src="/images/placeholderimage.jpg"
                                    alt='Member Image'
                                    width = "200"
                                    height = "200"
                                />                        
                            </figure>
                        </div>
                    </div>  
                </div>
            </div>
            
        </>

    )
}

export default TeamPage
