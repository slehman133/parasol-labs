import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)]">
        <p>GET IN CONTACT</p>
        <form className="mt-10 flex flex-col">
            <input className="input input-bordered input-ghost" type="email" placeholder="Your email" />
            <textarea className="textarea textarea-bordered textarea-ghost " placeholder="Your message"/>
            <button type="submit" className="btn btn-ghost btn-outline">Submit</button>
        </form>
    </section>
  )
}
