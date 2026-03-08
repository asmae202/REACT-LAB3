import ListeTaches from "./ListeTaches";
import Galerie from "./Galerie";
import LecteurAudio from "./LecteurAudio";

function Accueil() {
  return (
    <div>
      <h2>Bienvenue dans l'application</h2>

      <p>Voici mes tâches à réaliser :</p>

      <ListeTaches />

      <Galerie />

      <LecteurAudio />
    </div>
  );
}

export default Accueil;