import header_logo from "./res/1.jpg";
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
        <img src={header_logo}></img>
      </div>
    </div>
  );
}
