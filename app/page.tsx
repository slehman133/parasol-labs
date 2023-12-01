import Contact from "./components/Form/contact";

export default function Home() {
  return (
    <main>
      <div>
        <section className="content ">
          <div className="row">
            <div className="column p-10 mx-auto">
              <h1 className="text-2xl font-bold text-left text-black">
                Fueled by innovation.
              </h1>
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
        <section className="content border-t-black">
          <Contact />
        </section>
      </div>
    </main>
  );
}
