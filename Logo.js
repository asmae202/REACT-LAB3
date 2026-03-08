import logo from './logo.png';

function Logo() {
  return (
    <div className="composant">
      <h2>Logo de l’application</h2>
      <img src={logo} alt="Logo" style={{ width: '150px', display: 'block', margin: 'auto' }} />
    </div>
  );
}

export default Logo;