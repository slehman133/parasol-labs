import Contact from "./components/Form/contact";

export default function Home() {
  return (
    <main>
      <div>
        <div className="backgroundMain">
          <section className="content ">
            <div className="row">
              <div className="column p-10 mx-auto">
                <h1 className="text-5xl font-bold text-black centerText">
                  Fueled by innovation
                </h1>
                <h1
                  className="text-6xl font-bold text-black rightText"
                  data-end="U"
                >
                  Inspired by YO
                </h1>
                <p className="mainTextPrompt text-3xl">
                  <br />
                  At Parasol Labs, we are fueled by an unwavering commitment to
                  innovate and deliver life-changing biotechnology solutions for
                  marginalized communities and women's health. Through our
                  relentless pursuit of rigorous research and the deployment of
                  cutting-edge technology, we develop products that are safe,
                  effective, and accessible.
                </p>
              </div>
              <div className="column p-10">
                <img
                  className="resizeableImage"
                  src="/images/logo.png"
                  height="400px"
                  width="500px"
                />
              </div>
            </div>
          </section>
        </div>
        <section className="border-t-white">
          <img className="fullImage" src="/images/strl.jpg" />
        </section>
        <div className="backgroundMainReversal h-48 border-t-gray ">
          <section className="content border-b-2 "></section>
        </div>
        <div className="border-t-gray border-2 bg-white middleline">
          <section className="border-t-gray-500">
            <div className="row">
              <div className="column">
                <h1 className="ml-5 text-4xl font-bold text-black">
                  Contact &{" "}
                  <span className="first-letter:text-orange">Support</span>
                </h1>
                <p className="ml-5 text-xl text-black text-left">
                  <br />
                  Whether you have general questions or inquiries - we’re here
                  to provide information and answer questions.
                </p>
                <p className=""></p>
                <div className="content grid grid-cols-3 gap-12 content-center">
                  <div className="border-2 border-gray-500 rounded-md text-left">
                    <div className="grid grid-cols-2 gap-12 place-content-between">
                      <p className="w-auto min-w-fit resize-x font-bold text-black text-3xl break-words flex-auto">
                        Get Support
                      </p>
                      <div className="bg-orange-400 h-2 w-12 mx-auto"></div>
                    </div>
                    <p className="text-gray-500 break-words">
                      <br />
                      Need a hand? Fill out the form or use the self-serve in
                      our Help Center.
                    </p>
                  </div>
                  <div className="border-2 border-gray-500 rounded-md text-left ">
                    <div className="grid grid-cols-2 gap-12 place-content-between ">
                      <p className="w-auto font-bold text-black text-3xl break-normal ">
                        Partnership 
                        <br/>Inquiries
                      </p>
                      <div className="bg-purple-400 h-2 w-12 mx-auto resize "></div>
                    </div>
                    <p className="text-gray-500 break-words">
                      <br />
                      Lets work and grow together. Fill out the forms and our
                      partnership manager will reach out to you.
                    </p>
                  </div>
                  <div className="border-2 border-gray-500 rounded-md text-left">
                    <div className="grid grid-cols-2 gap-12 place-content-between">
                      <p className="font-bold text-black text-3xl break-words truncate ... w-max">
                        General
                        <br />
                        Inquiries
                      </p>
                      <div className="bg-green-200 h-2 w-12 mx-auto"></div>
                    </div>
                    <p className="text-gray-500 break-words ">
                      <br />
                      Need more information? Have an inquiry for an issue? We're
                      here to help. Fill out our form and we will get in touch.
                    </p>
                  </div>
                </div>
                <Contact />
              </div>
              <div className="column border-l-2">
                <img className="fullImage" src="/images/homepagelady.png" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
