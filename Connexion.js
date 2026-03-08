import { useState } from 'react';

function Connexion() {
  const [connecte, setConnecte] = useState(false);

  return (
    <div className="composant">
      <h2>Rendu conditionnel – Connexion</h2>
      {connecte ? (
        <p style={{ color: 'green' }}>Connecté ✅</p>
      ) : (
        <p style={{ color: 'red' }}>Déconnecté ❌</p>
      )}
      <button onClick={() => setConnecte(!connecte)}>
        Changer l’état
      </button>
    </div>
  );
}

export default Connexion;