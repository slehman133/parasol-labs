import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



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
            <div className = "md:px-48 md:py-16">
                <div className="flex flex-col px-4 md:px-24">
                <Link href ={'/team/ahmed_munoz'}>
                    <div className='flex flex-row border-solid border-2 border-white rounded-lg p-4 hover:ring-4'>
                        <div className='flex basis-2/12'>
                            <figure>
                                <Image
                                    src="/images/AhmedPic.jpg"
                                    alt='Picture of Ahmed Munoz, founder of Parasol Labs'
                                    width = "1600"
                                    height = "1600"
                                />                        
                            </figure>
                        </div>
                        <div className='flex flex-col gap-4 basis-10/12 relative'>
                            <h2 className='px-8 text-3xl'>Ahmed Munoz</h2>
                            <a
                                className='absolute bottom-0 right-0'
                                target="_blank"
                                href="https://www.linkedin.com/in/ahmed-munoz-/"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="#FFFFFF"
                                >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                className='absolute bottom-0 right-24'
                                target="_blank"
                                href="https://twitter.com/"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="#FFFFFF"
                                >
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                            </a>
                            
                            {/* <p className='px-16 text-lg'>Innovative and driven IT consultant with proven leadership experience in architecture, infrastructure, solutions delivery, IT Operations, enterprise security, project management, hyper-converged systems, vendor relations, and agile/waterfall development workflows. Recognized for working on the bleeding edge of technology to promote individual development, optimize business processes, increase profitability, boost productivity, and enhancing team cohesion while reducing overhead.Innovative and driven IT consultant with proven leadership experience in architecture, infrastructure, solutions delivery, IT Operations, enterprise security, project management, hyper-converged systems, vendor relations, and agile/waterfall development workflows. Recognized for working on the bleeding edge of technology to promote individual development, optimize business processes, increase profitability, boost productivity, and enhancing team cohesion while reducing overhead.</p> */}
                        </div>
                    </div>
                </Link>
                </div>
                <div className="flex flex-col py-8 px-4 md:px-24">
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
                                    width = "1600"
                                    height = "1600"
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
