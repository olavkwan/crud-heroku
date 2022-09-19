function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row justify-content-center fs-5 text-center">
          <div className="col-md-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellat quasi voluptatum minima aliquid, ipsam illo molestias culpa atque aperiam.</p>
          </div>
          <div className="col-md-4">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam omnis neque non facilis explicabo quisquam eos assumenda, in, natus dignissimos, pariatur totam beatae cumque esse?
            </p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#057485"
            fillOpacity="1"
            d="M0,192L60,213.3C120,235,240,277,360,250.7C480,224,600,128,720,117.3C840,107,960,181,1080,186.7C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
export default About;
