import React from 'react'
import Image from 'next/image'


interface TeamCardProps {
    name: string;
    about: string;
    image: string;
}

const TeamCard = (props: TeamCardProps) => {
    return (
        <>
            <div className="grid grid-rows-3 grid-flow-col gap-20">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className='overflow-hidden max-w-lg'>
                        <Image className='object-cover w-full h-full' height = {9000} width={9000} alt={props.image} />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                
                            </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl card-side">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                
                            </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl card-side">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                            
                            </div>
                    </div>
                </div>
            </div>
            
            <p>
                At Parasol Labs, we are fueled by an unwavering commitment to innovate and deliver life-changing biotechnology solutions for marginalized communities and womens health. Through our relentless pursuit of rigorous research and the deployment of cutting-edge technology, we develop products that are safe, effective, and accessible.
                By targeting niche markets, we create new opportunities for brand disruption and lead the way in providing effective treatments for those who need them the most. Our passion, expertise, and ingenuity set us apart and position us to redefine the landscape of biotechnology for generations to come.
            </p>

        </main>
    )
}

export default TeamCard