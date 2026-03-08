import img1 from "./image1.png";
import img2 from "./image2.png";
import img3 from "./image3.png";

function Galerie() {
  return (
    <div>

      <h3>Galerie</h3>

      <img src={img1} alt="image1" width="150" />
      <img src={img2} alt="image2" width="150" />
      <img src={img3} alt="image3" width="150" />

    </div>
  );
}

export default Galerie;