import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//Written by Nicholas Whitehorn
//Developed
export async function generateMetadata() {
    return {
        title: 'About Parasol Labs',
    }
}

const AboutPage = () => {
    

    return (
        <>
          <div className='flex flex-row px-36 py-24 gap-24'>
            <div className = "flex flex-col basis-9/12">
                <div className = "flex flex-col text-lg">
                
                  <div className = " py-4 text-4xl bg-slate-500 text-white">
                    <h2>THE FUTURE OF HEALTHCARE BEGINS NOW.</h2>
                  </div>
                  <div className = "flex p-4">
                    <p>At Parasol Labs, we believe that our values are the cornerstone of our identity. Driven by a commitment to excellence, integrity, and innovation, we strive to transcend the ordinary in everything we do. We're not just about making promises; we're about embodying them in every project, every breakthrough, and every interaction. Here, our actions speak louder than words, reflecting our unwavering dedication to impacting the world positively and paving the way for a brighter, healthier future.</p>
                  </div>
                  <div className = "flex py-2 bg-slate-500 text-white text-3xl">
                    <h2>MISSION STATEMENT</h2>
                  </div>
                  <div className = "flex py-2 px-4">
                    <p>Parasol Laboratories Incorporated is dedicated to pioneering transformative solutions that solve global health needs, empower marginalized communities, and target underserved markets. We are driven by a deep-rooted ethos, prioritizing the well-being of our end users and the integrity of our data.</p>
                  </div>
                  <div className = "flex py-2 px-4">
                    <p>Every product we design, every decision we make, is anchored in creating a tangible, positive impact, with no compromise. Our responsibility extends beyond profit, as we reinvest in our community, ensuring equitable care and quality of life are forever at the forefront of our endeavors.</p>
                  </div>
                  <div className = "flex py-2 px-4">
                    <p>Every day at Parasol Laboratories Incorporated, we operationalize our mission by engineering products with the end user's best interest in mind. Our pricing models allow us to produce more while giving back, ensuring that our innovations reach those who need them most, not just those who can afford them. We champion environmental responsibility, sustainability, and neutrality in all our processes.</p>
                  </div>
                  <div className = "flex py-2 px-4">
                  <p>Our team, our greatest asset, is nurtured in an environment that values their well-being, rewards their expertise, and encourages continuous growth. Together, we work towards building a lasting legacy of positive change and unparalleled impact, internally and externally.</p>
                  </div>
                  
                  <div className='flex flex-row p-8 gap-8'>
                    <div className = "">
                      <Link href="/team">
                        <button className='btn btn-wide rounded-lg bg-white font-bold px-5 text-2xl'>
                          Learn More
                        </button>
                      </Link>
                    </div>
                    <div className = "">
                      <Link href="/products">
                        <button className='btn btn-wide h-12 rounded-lg bg-white font-bold px-5 text-2xl'>
                          Shop Products
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                
                
                
                
              </div>
              <div className = 'flex px-8 py-48'>
                
                <figure>
                    <Image
                      src="/images/logo.png"
                      alt='Member Image'
                      width = "400"
                      height = "400"
                    />     
                  </figure>
                </div>
          </div>
        </>
    )
    
}



export default AboutPage