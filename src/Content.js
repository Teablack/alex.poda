import printer_3D from "./res/printer_3D.png";
import queen_bee from "./res/queen_bee.png";
import beekeeper from "./res/beekeeper.png";
import diy from "./res/diy.png";
import Card from "./Card";
export default function Content() {
  const CardItems = elements.map((el) => <Card key={el.id} {...el} />);
  return <div className="content">{CardItems}</div>;
}

const elements = [
  {
    id: 0,
    description: "Wykonany został metodą druku 3D",
    image: printer_3D,
  },
  {
    id: 1,
    description: "Skręcony i doskonalony ręcznie",
    image: diy,
  },
  {
    id: 2,
    description:
      "Zaprojektowana technologia pozwala zminimalizować ryzyko uszkodzenia matki.",
    image: queen_bee,
  },
  {
    id: 3,
    description:
      "Jest idealny dla początkujących pszczelarzy ze względu na budowę oraz równie dobrze sprawdza się dla profesjonalnego użytkowania.",
    image: beekeeper,
  },
];
