import React from 'react'
import "./homestyles.css"
//Kaeden
//TODO: figure out how the hell to hide the header and have it fade in at a certain point
//ALSO: figure out how to make the video scroll into the div below and not have it be its own section.
export default function Home() {
  return (
    <main>
      
      <video loop muted autoPlay className='relative'>
        <source src='/videos/glitchingParasol.mp4' type='video/mp4' />
      </video>
      <div>
        <section className='content'>
          <div className='row'>
            <div className='column p-10 mx-auto'>
              <h1 className='text-5xl font-bold text-center'>
                Fueled by innovation
              </h1>
              <h1 className='text-6xl font-bold text-right' data-end='U'>
                Inspired by YO
              </h1>
              <p className='text-left text-3xl'>
                <br />
                At Parasol Labs, we are fueled by an unwavering commitment to innovate and deliver life-changing biotechnology for marginalized communities and women's health. Through our relentless pursuit of rigorous research and the deployment of cutting-edge technology, we develop products that are safe, effective, and accessible.
              </p>
            </div>
            <div className='column p-10'>
              <img 
                className='resizeableImage'
                src='/images/logo.png'
                height='400px'
                width='500px'/>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
