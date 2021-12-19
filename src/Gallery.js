export default function Gallery() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context("./res", false, /\.(jpe?g|svg)$/));

  // function handleOnClick(i) {
  //   alert(i);
  // }
  return (
    <div className="gallery">
      {images.map((item) => (
        <img src={item}></img>
      ))}
    </div>
  );
}
