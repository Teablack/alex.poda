import { Link } from "react-router-dom";
export default function Menu({ path }) {
  return (
    <div className="menu">
      <div className="navigation"></div>
      <div className="navigation">
        <Link to={`${path}/`}>Opis</Link>
        <Link to={`${path}/galeria`}>Galeria</Link>
        <Link to={`${path}/kontakt`}>Kontakt</Link>
      </div>
    </div>
  );
}
