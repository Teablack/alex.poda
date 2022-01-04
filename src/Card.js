import printer_3d from "./res/printer_3D.png";
import queen_bee from "./res/queen_bee.png";
import diy from "./res/diy.png";
export default function Card({ id, description, image }) {
  return (
    <div className="card">
      {id % 2 ? (
        <>
          <div className="item">
            <p>{description}</p>
          </div>
          <div className="image_item">
            <img src={image}></img>
          </div>
        </>
      ) : (
        <>
          <div className="image_item">
            <img src={image}></img>
          </div>
          <div className="item">
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
}
