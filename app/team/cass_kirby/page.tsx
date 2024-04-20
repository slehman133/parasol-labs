import Image from "next/image";

export async function generateMetadata() {
    return {
        title: 'Cass Kirby at Parasol Labs',
    }
}

//developed
//Written by Nicholas Whitehorn

const MemberPage = () => {
    return (
        <>
            <div className="flex p-8 md:px-48 md:py-36">
                <div className="flex md:flex-row flex-col items-start gap-8">
                    <div className="flex">
                        <Image
                            alt = 'Picture of Cass Kirby, CEO of Parasol Labs'
                            src="/images/CassKirby.jpeg"
                            height = "600"
                            width = "600"
                            
                        />
                    </div>
                    <div className="flex flex-col basis-3/4 text-xl gap-4">
                        <h1 className="text-3xl">Cass Kirby</h1>
                        <h2 className="">CEO</h2>
                        <p className="md:text-xl text-medium">Passionate and visionary, Cass Kirby stands at the forefront of biomedical innovation as the CEO and co-founder of Parasol Labs. With a proven track record of leadership and a relentless pursuit of excellence, Cass drives Parasol Labs to push the boundaries of scientific discovery and redefine the future of healthcare. With a wealth of experience in the biomedical field, Cass brings a multifaceted skill set to the helm of Parasol Labs. From research and development to strategic planning and execution, Cass's expertise spans the entire spectrum of biomedical innovation. Cass is recognized for his unwavering commitment to driving positive change in healthcare. Through groundbreaking research initiatives and cutting-edge technologies, Cass and the Parasol Labs team are dedicated to tackling some of the most pressing health challenges facing humanity today. At Parasol Labs, Cass fosters a culture of collaboration and creativity, empowering a diverse team of scientists and researchers to push the boundaries of possibility. By championing innovation and embracing new ideas, Cass ensures that Parasol Labs remains at the forefront of biomedical research and development. Beyond the laboratory, Cass is a vocal advocate for the advancement of biomedical research and the importance of investing in scientific innovation. Through his leadership, Parasol Labs continues to shape the future of healthcare, making a meaningful impact on the lives of individuals around the world. In Cass Kirby, Parasol Labs has a visionary leader dedicated to driving positive change in healthcare through innovation, collaboration, and a relentless pursuit of excellence. With Cass at the helm, Parasol Labs is poised to continue revolutionizing the biomedical landscape and making a lasting impact on global health.</p>
                        <div className="flex flex-column py-4 gap-4">
                            <a
                                className=''
                                target="_blank"
                                href="https://www.linkedin.com/in/cass-kirby/"
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
                            {/* <a
                                className=''
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
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/>
                                </svg>
                            </a> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default MemberPage