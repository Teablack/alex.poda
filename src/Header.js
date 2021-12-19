import logo from "./res/logo.png";
export default function Header() {
  return (
    <div className="header">
      <div className="header_text">
        <p>
          Aparat do sztucznej
          <br /> inseminacji <br />
          matek pszczelich
        </p>
      </div>
      <div className="header_logo">
        <img src={logo}></img>
      </div>
    </div>
  );
}
