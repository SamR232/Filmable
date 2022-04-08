import "./App.css";
import FilmImage from "./Components/FilmImage";
import AnswerBox from "./Components/AnswerBox";

function App() {
  const filmDb = [
    {
      id: 1,
      title: "the french dispatch",
      img: "https://i.ytimg.com/vi/3DOp3A_2fIM/sddefault.jpg",
    },
    {
      id: 2,
      title: "the adam project",
      img: "https://www.denofgeek.com/wp-content/uploads/2022/03/adam.jpg?resize=768%2C432",
    },
    {
      id: 3,
      title: "the fast and furious: tokyo drift",
      img: "https://images.mubicdn.net/images/film/41368/cache-34957-1638464487/image-w1280.jpg?size=800x",
    },
    {
      id: 4,
      title: "saving private ryan",
      img: "https://cdn.onebauer.media/one/empire-tmdb/films/857/images/4y5TDUZlqUmWWtjTAznWb6CFpzt.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill",
    },
    {
      id: 5,
      title: "shutter island",
      img: "https://a.ltrbxd.com/resized/sm/upload/db/pv/z7/q5/shutter-island-1200-1200-675-675-crop-000000.jpg?k=abd00136c6",
    },
  ];

  let score = 0;

  function randomNum(max) {
    return Math.ceil(Math.random() * max);
  }
  const randomId = randomNum(filmDb.length);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Filmable</h1>
      </header>
      <section>
        <FilmImage randomId={randomId} filmDb={filmDb}></FilmImage>
        <AnswerBox randomId={randomId} filmDb={filmDb}></AnswerBox>
      </section>
    </div>
  );
}

export default App;

// NOTES: largest scope for componenets is within app
// So random ID can be set within app and passed to components via props, same as filmDb
