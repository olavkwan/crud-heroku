function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row text-center mb-3">
            <div className="col">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="name" aria-describedby="name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Messages</label>
                  <textarea className="form-control" id="pesan" rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-danger">
                  Touch me!
                </button>
              </form>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#057485"
            fillOpacity="1"
            d="M0,0L30,21.3C60,43,120,85,180,122.7C240,160,300,192,360,181.3C420,171,480,117,540,112C600,107,660,149,720,154.7C780,160,840,128,900,112C960,96,1020,96,1080,117.3C1140,139,1200,181,1260,181.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
}
export default Contact;
