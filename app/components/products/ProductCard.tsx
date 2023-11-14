import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = (props: any) => {
    return (
        <>
            <div className='w-96 p-5 border-2 overflow-hidden m-5'>
                <Link href={`/products/${props.handle}`}>
                    {props.image ?
                        <Image
                            width={400}
                            height={400}
                            className=''
                            src={props.image}
                            alt={props.altText} />
                        :
                        <div className='w-96 h-96 bg-white' />
                    }
                    <h1>{props.title}</h1>
                    <p>{props.price}</p>
                </Link>
            </div >
        </>
    )
}

export default ProductCard