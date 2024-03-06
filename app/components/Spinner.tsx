import React from 'react'
import { Spinner as NextUISpinner } from '@nextui-org/react'

const Spinner = () => {
    return (
        <>
            <div className='z-[9999999] bg-background          
            fixed h-[100vh] w-[100vw] 
            top-0 left-0 
            grid grid-cols-1 grid-rows-3 justify-items-center'>
                <div className='row-start-2'>
                    <NextUISpinner color="success" label="Loading..." size='lg' />
                </div>
            </div>
        </>
    )
}

export default Spinner