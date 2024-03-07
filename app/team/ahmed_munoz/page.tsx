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
            <div className="flex md:p-48">
                <div className="flex flex-col gap-4">
                    <div className="flex-auto mx:auto">
                        <Image
                        src="/images/AhmedPic.jpg"
                        alt='Picture of Ahmed Munoz, founder of Parasol Labs'
                        width = "600"
                        height = "600"
                        />
                    </div>
                    <div className="flex flex-col text-xl gap-4">
                        <h1 className="text-3xl">Ahmed Munoz</h1>
                        <h2 className="">Founder and CEO</h2>
                        <p>Innovative and driven IT consultant with proven leadership experience in architecture, infrastructure, solutions delivery, IT Operations, enterprise security, project management, hyper-converged systems, vendor relations, and agile/waterfall development workflows. Recognized for working on the bleeding edge of technology to promote individual development, optimize business processes, increase profitability, boost productivity, and enhancing team cohesion while reducing overhead.Innovative and driven IT consultant with proven leadership experience in architecture, infrastructure, solutions delivery, IT Operations, enterprise security, project management, hyper-converged systems, vendor relations, and agile/waterfall development workflows. Recognized for working on the bleeding edge of technology to promote individual development, optimize business processes, increase profitability, boost productivity, and enhancing team cohesion while reducing overhead.</p>
                    </div>
                </div>
            </div>
            <p>Words</p>

        </>
    );
}

export default MemberPage