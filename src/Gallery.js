import { useState } from "react";
export default function Gallery() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context("./res", false, /\.(jpe?g|svg)$/));
  const imgList = images.map((img, i) => {
    return { src: img, id: i };
  });

  const [pickedImg, setPickedImg] = useState(null);

  function handlePrevImg() {
    pickedImg === 0
      ? setPickedImg(imgList.length - 1)
      : setPickedImg(pickedImg - 1);
  }
  function handleNextImg() {
    pickedImg === imgList.length - 1
      ? setPickedImg(0)
      : setPickedImg(pickedImg + 1);
  }
  return (
    <>
      {pickedImg !== null ? (
        <>
          <div class="show">
            <button
              class="button__arrow button__arrow--right"
              onClick={handlePrevImg}
            ></button>

            <img
              className="showImage"
              src={imgList.find((img) => img.id === pickedImg).src}
              onClick={() => setPickedImg(null)}
            ></img>

            <button
              class="button__arrow button__arrow--left"
              onClick={handleNextImg}
            ></button>
          </div>
        </>
      ) : null}
      <div className="gallery">
        {imgList.map((item) => (
          <img
            key={item.id}
            src={item.src}
            onClick={() => setPickedImg(item.id)}
          ></img>
        ))}
      </div>
    </>
  );
}
