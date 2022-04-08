const FilmImage = (props) => {
  const {randomId} = props;
  const {filmDb} = props;

  return (
    <div>
      {filmDb.map((film) => {
        if (randomId === film.id) {
          return <img key={film.id} src={film.img} alt="img of film" />;
        }
      })}
    </div>
  );
};

export default FilmImage;
