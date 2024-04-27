import Image from "next/image";

export async function generateMetadata() {
    return {
        title: 'Ahmed Munoz at Parasol Labs',
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
                        src="/images/AhmedPic.jpeg"
                        alt='Picture of Ahmed Munoz, founder of Parasol Labs'
                        width = "400"
                        height = "400"
                        />
                    </div>
                    <div className="flex flex-col basis-3/4 text-xl gap-4">
                        <h1 className="text-3xl">Ahmed Munoz</h1>
                        <h2 className="">Founder and CEO</h2>
                        <p className="md:text-xl text-medium"> Innovative and driven IT consultant with proven leadership experience in architecture, infrastructure, solutions delivery, IT Operations, enterprise security, project management, hyper-converged systems, vendor relations, and agile/waterfall development workflows. Recognized for working on the bleeding edge of technology to promote individual development, optimize business processes, increase profitability, boost productivity, and enhancing team cohesion while reducing overhead.Innovative and driven IT consultant with proven leadership experience in architecture, infrastructure, solutions delivery, IT Operations, enterprise security, project management, hyper-converged systems, vendor relations, and agile/waterfall development workflows. Recognized for working on the bleeding edge of technology to promote individual development, optimize business processes, increase profitability, boost productivity, and enhancing team cohesion while reducing overhead.</p>
                        <div className="flex flex-column py-4 gap-4">
                            <a
                                className='light:invert'
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