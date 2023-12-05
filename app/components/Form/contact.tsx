import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="content mb-20 sm:mb-28 w-[min(100%,38rem)] "
    >
      <div className="border-2 border-gray rounded-3xl">
        <form className="mt-10 flex flex-col p-5">
          <div className="label">
            <span className="label-text">Subject</span>
          </div>
          <input
            className="input input-bordered input-ghost bg-transparent border-black border"
            type="subject"
          ></input>
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            className="input input-bordered input-ghost p-5 bg-transparent border-black border"
            type="email"
          />
          <div className="label">
            <span className="label-text">Message</span>
          </div>
          <textarea className="textarea textarea-bordered textarea-ghost border-black border bg-transparent p-5" />
          <div className="h-4"></div>
          <button
            type="submit"
            className="btn btn-ghost btn-outline border-black border "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
