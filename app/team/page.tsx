import React from 'react'
import Image from 'next/image'



export async function generateMetadata() {
    return {
        title: 'The Team at Parasol Labs',
    }
}

const TeamPage = () => {
    return (
        <>
            <div className = "p-16">
                <div className="grid grid-cols-3 p-8 gap-48 justify-center">
                        
                        <div className='col-span-1'>
                            <figure>
                                <Image
                                    src="/images/placeholderimage.jpg"
                                    alt='Member Image'
                                    width = "400"
                                    height = "400"
                                />                        
                            </figure>
                        </div>
                        <div className='col-span-1'>
                            <h2>Name</h2>
                                <p>Description</p>
                        </div>
                        <div className='col-span-1'></div>
                    
                        
                        <div className='col-span-1'></div>
                        <div className='col-span-1'>
                            <h2>Name</h2>
                                <p>Description</p>
                        </div>
                        <div className='col-span-1'>
                            <figure>
                                <Image
                                    src="/images/placeholderimage.jpg"
                                    alt='Member Image'
                                    width = "400"
                                    height = "400"
                                />                        
                            </figure>
                        </div>

                        {/* Not currently working but an option in the future */}
                        <div className="card card-side w-full bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Name</h2>
                                    <p>Description</p>
                                    <div className="card-actions justify-end">
                                        
                                    </div>
                            </div>
                            <figure>
                                <Image
                                    src="/images/placeholderimage.jpg"
                                    alt='Member Image'
                                    width = "400"
                                    height = "400"
                                />                        
                            </figure>
                            
                        </div>
                </div>
            </div>
            
        </>

    )
}

export default TeamPage
