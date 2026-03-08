import son from "./audio.ogg";

function LecteurAudio() {
  return (
    <div>
      <h3>Audio Explicatif:</h3>
      <audio controls src={son}></audio>
    </div>
  );
}

export default LecteurAudio;