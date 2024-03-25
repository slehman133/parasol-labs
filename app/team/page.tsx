import React from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    Divider,
    Image,
    Link,
  } from "@nextui-org/react";
  import NextImage from 'next/image'




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
            <div className = "flex md:px-48 md:py-16 flex-col gap-4">
                <h2 className="flex text-3xl justify-center px-4">
                    <Image
                        as={NextImage}
                        src="/images/TeamTitle.jpeg"
                        width={600}
                        height={600}
                    />
                </h2>
                <Divider/>
                <div className="flex flex-row justify-center gap-16 md:px-24">
                    <Link href ={'/team/ahmed_munoz'}>
                        <Card className='py-4 flex-col hover:scale-105'>
                            <CardHeader className='overflow-visible z-0 items-start'>
                                <Image
                                        alt = 'Picture of Ahmed Munoz, founder of Parasol Labs'
                                        src="/images/AhmedPic.jpeg"
                                        className="z-0 object-cover"
                                        height = {300}
                                        width = {300}
                                    />
                            </CardHeader>
                            <CardBody className='flex-col z-10 pb-2 pt-4 px-4 text-xl'>
                                <h2>Ahmed Munoz</h2>
                                <Divider/>
                                <p className='text-sm'>Founder</p>
                            </CardBody>
                        </Card>   
                    </Link>
                    <Link href ={'/team/cass_kirby'}>
                        <Card className='py-4 flex-col hover:scale-105'>
                            <CardHeader className='overflow-visible z-0 items-start'>
                                <Image
                                        alt = 'Picture of Cass Kirby, CEO of Parasol Labs'
                                        src="/images/CassKirby.jpeg"
                                        className="z-0 object-cover"
                                        height = {300}
                                        width = {300}
                                    />
                            </CardHeader>
                            <CardBody className='flex-col z-10 pb-2 pt-4 px-4 text-xl'>
                                <h2>Ahmed Munoz</h2>
                                <Divider/>
                                <p className='text-sm'>CEO</p>
                            </CardBody>
                        </Card>   
                    </Link>
                    <Link href ={'/team/teagan_padelford'}>
                        <Card className='py-2 flex-col hover:scale-105 gap-32'>
                            <CardHeader className='overflow-visible z-0 items-start'>
                                <Image
                                        alt = 'Picture of Teagan Padelford, Co-founder and CSO of Parasol Labs'
                                        src="/images/teagan_and_frankie.webp"
                                        className="z-0 object-cover"
                                        height = {300}
                                        width = {300}
                                    />
                            </CardHeader>
                            <CardBody className='flex-col z-10 pb-2 pt-4 px-4 text-xl'>
                                <h2>Teagan Padelford</h2>
                                <Divider/>
                                <p className='text-sm'>Co-founder and CSO</p>
                            </CardBody>
                        </Card>   
                    </Link>
                </div>
            </div>
            
        </>

    )
}

export default TeamPage
