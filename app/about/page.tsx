import React from 'react'
import Image from 'next/image'
import Contact from '../components/Form/contact'


export async function generateMetadata() {
    return {
        title: 'About Parasol Labs',
    }
}

const AboutPage = () => {
    

    return (
        <>
          <div className='flex p-8'>
              <h1>Parasol Labs</h1>
          </div>
          <div className = "flex flex-row px-16">
              <div className = "basis-4/5 grid grid-cols-8 p-16">
              
                <div className = "col-span-8 py-2">
                  <h2>THE FUTURE OF HEALTHCARE BEGINS NOW.</h2>
                </div>
                <div className = "col-span-8 py-4">
                  <p>At Parasol Labs, we believe that our values are the cornerstone of our identity. Driven by a commitment to excellence, integrity, and innovation, we strive to transcend the ordinary in everything we do. We're not just about making promises; we're about embodying them in every project, every breakthrough, and every interaction. Here, our actions speak louder than words, reflecting our unwavering dedication to impacting the world positively and paving the way for a brighter, healthier future.</p>
                </div>
                <div className = "col-span-8 py-2">
                  <h2>MISSION STATEMENT</h2>
                </div>
                <div className = "col-span-8 py-4">
                  <p>Parasol Laboratories Incorporated is dedicated to pioneering transformative solutions that solve global health needs, empower marginalized communities, and target underserved markets. We are driven by a deep-rooted ethos, prioritizing the well-being of our end users and the integrity of our data.</p>
                  <p>Every product we design, every decision we make, is anchored in creating a tangible, positive impact, with no compromise. Our responsibility extends beyond profit, as we reinvest in our community, ensuring equitable care and quality of life are forever at the forefront of our endeavors.</p>
                </div>
                <div className = "col-span-8 py-2">
                  <h2>Header Item 3</h2>
                </div>
                <div className = "col-span-8 py-4">
                  <p>Info Snippet 3</p>
                </div>
                <div className = "py-4">
                  <button className='btn btn-active'>
                    Button
                  </button>
                </div>
                <div className = "py-4">
                  <button className='btn btn-active'>
                    Button
                  </button>
                </div>
              </div>
              <div className = 'relative basis-1/5 inset-y-16'>
              <p>LOGO</p>
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
        </>
    )
    
}



export default AboutPage