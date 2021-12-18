import header_logo from "./res/1.jpg";
import printer_3d from "./res/printer_3d.png";
import queen_bee from "./res/queen_bee.png";
import diy from "./res/diy.png";
function App() {
  return (
    <div className="App">
      <div className="menu">
        <div className="navigation"></div>
        <div className="navigation">
          <p>Opis</p>
          <p>Galeria</p>
          <p>Kontakt</p>
        </div>
      </div>
      <div className="header">
        <div className="header_text">
          <p>
            Aparat do sztucznej
            <br /> inseminacji <br />
            matek pszczelich
          </p>
        </div>
        <img className="header_logo" src={header_logo}></img>
      </div>
      <div className="content">
        <div className="card">
          <div className="image_item">
            <img src={printer_3d}></img>
          </div>
          <div className="item">
            <p>Wykonany został metodą druku 3D</p>
          </div>
        </div>
        <div className="card">
          <div className="item">
            <p>Skręcony i doskonalony ręcznie </p>
          </div>
          <div className="image_item">
            <img src={diy}></img>
          </div>
        </div>
        <div className="card">
          <div className="image_item">
            <img src={queen_bee}></img>
          </div>
          <div className="item">
            <p>
              Zaprojektowana technologia pozwala zminimalizować ryzyko
              uszkodzenia matki.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="item">
            <p>
              Jest idealny dla początkujących pszczelarzy ze względu na budowę
              oraz równie dobrze sprawdza się dla profesjonalnego użytkowania.
            </p>
          </div>
          <div className="image_item">
            <img src={printer_3d}></img>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
