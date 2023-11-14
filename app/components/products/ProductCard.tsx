import React from 'react'
import Link from 'next/link'

const ProductCard = (props: any) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl m-5">
                {props.image ?
                    <figure><img src={props.image} alt={props.altText} /></figure>
                    :
                    <figure><img src='/images/no_product_image.png' alt='no product image' /></figure>
                }
                <div className="card-body">
                    <h2 className="card-title">{props.title}</h2>
                    <p>{props.description}</p>
                    <div className="card-actions justify-end">
                        <Link href={`/products/${props.handle}`}>
                            <button className="btn btn-primary">View</button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProductCard