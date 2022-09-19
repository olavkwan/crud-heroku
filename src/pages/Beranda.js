import photo from '../img/olavkwan.jpg';

function Beranda() {
  return (
    <section className="jumbotron text-center">
      <img className="rounded-circle img-thumbnail" src={photo} alt="olavkwan" width="200" />
      <h1 className="display-4">Olaf W Felix Sibuea</h1>
      <p className="lead">IT Consultant | Content Creator</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#057485"
          fillOpacity="1"
          d="M0,320L0,32L96,32L96,288L192,288L192,128L288,128L288,32L384,32L384,160L480,160L480,288L576,288L576,32L672,32L672,96L768,96L768,256L864,256L864,96L960,96L960,192L1056,192L1056,224L1152,224L1152,32L1248,32L1248,128L1344,128L1344,192L1440,192L1440,320L1344,320L1344,320L1248,320L1248,320L1152,320L1152,320L1056,320L1056,320L960,320L960,320L864,320L864,320L768,320L768,320L672,320L672,320L576,320L576,320L480,320L480,320L384,320L384,320L288,320L288,320L192,320L192,320L96,320L96,320L0,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default Beranda;
