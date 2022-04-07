const FilmImage = (props) => {
  function randomNum(max) {
    return Math.ceil(Math.random() * max);
  }
  const randomID = randomNum(props.filmDb.length);

  return (
    <div>
      {props.filmDb.map((film) => {
        if (randomID === film.id) {
          return <img key={film.id} src={film.img} alt="img of film" />;
        }
      })}
    </div>
  );
};

export default FilmImage;
