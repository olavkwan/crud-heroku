import g1 from '../img/1.jpg';
import g2 from '../img/2.jpg';
import g3 from '../img/4.jpg';
import g4 from '../img/3.jpg';
import g5 from '../img/5.jpg';
function Project() {
  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="row text-center mb-3">
            <div className="col">
              <h2>My Projects</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src={g1} className="card-img-top" alt="Project2" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src={g2} className="card-img-top" alt="Project4" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src={g3} className="card-img-top" alt="Project6" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src={g4} className="card-img-top" alt="Project3" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <img src={g5} className="card-img-top" alt="Project5" />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#057485"
            fillOpacity="1"
            d="M0,128L60,160C120,192,240,256,360,256C480,256,600,192,720,186.7C840,181,960,235,1080,266.7C1200,299,1320,309,1380,314.7L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
}
export default Project;
