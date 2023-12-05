import Contact from "./components/Form/contact";

export default function Home() {
  return (
    <main>
      <div>
        <section className="content ">
          <div className="row">
            <div className="column p-10 mx-auto">
              <h1 className="text-4xl font-bold text-black centerText">
                Fueled by innovation
              </h1>
              <h1 className="text-5xl font-bold text-black rightText" data-end="U">
                Inspired by YO
              </h1>
              <p className="mainTextPrompt" >
                <br />
                At Parasol Labs, we are fueled by an unwavering commitment to innovate and deliver life-changing biotechnology solutions for marginalized communities and women's health. Through our relentless pursuit of rigorous research and the deployment of cutting-edge technology, we develop products that are safe, effective, and accessible.
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
        <section>
          <img
            className="fullImage"
            src="/images/strl.jpg"
          />
        </section>
        <section className="content border-t-black backgroundMainReversal border-t-2 border-b-2">
          <div className="row">
            <div className="column p-5 border-r-2 border-top-2">
              <Contact />
            </div>
            <div className="column p-5 border-l-2">
              <img src="/images/homepagelady.png"/>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
