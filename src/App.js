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
      title: "john wick",
      img: "https://m.media-amazon.com/images/M/MV5BMDE0ZjMzOTAtMzU2OS00ZDVmLWFlMjYtMThlOWYwMDBiN2E3XkEyXkFqcGdeQWFsZWxvZw@@._V1_QL75_UX500_CR0,0,500,281_.jpg",
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
    {
      id: 6,
      title: "i am legend",
      img: "https://www.denofgeek.com/wp-content/uploads/2021/03/I-am-Legend.jpeg",
    },
    {
      id: 7,
      title: "coach carter",
      img: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABfsX5qsaqSSA6RGoIOZ9QUvwUP_4xHL4xUK5T--eFzoLZR-n4ncsXZZdvRgxHpKmQmuv4IGxzXpj7UnksXAOyOUz5E55.jpg?r=576",
    },
    {
      id: 8,
      title: "moana",
      img: "https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/2/1/1/1250211_Moana.jpg",
    },
    {
      id: 9,
      title: "brother bear",
      img: "https://discourse.disneyheroesgame.com/uploads/default/original/3X/2/2/22a3937673804fbc8fb5499f09640fc772fa2a10.jpeg",
    },
    {
      id: 10,
      title: "finding dory",
      img: "https://akns-images.eonline.com/eol_images/Entire_Site/2016830/rs_600x600-160930114035-600.finding-dory-1.9316.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
    },
  ];
  let idArray = [];

  function imageGenerator(maxLength) {
    let randomId = Math.ceil(Math.random() * maxLength);
    if (!idArray.includes(randomId) && idArray.length !== filmDb.length) {
      idArray.push(randomId);
      return randomId;
    } else if (idArray.includes(randomId) && idArray.length !== filmDb.length) {
      return imageGenerator(maxLength);
    } else {
      return randomId;
    }
  }

  const newImageId = imageGenerator(filmDb.length);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Filmable</h1>
      </header>
      <section>
        <FilmImage randomId={newImageId} filmDb={filmDb}></FilmImage>
        <AnswerBox randomId={newImageId} filmDb={filmDb}></AnswerBox>
      </section>
    </div>
  );
}

export default App;

// NOTES: largest scope for componenets is within app
// So random ID can be set within app and passed to components via props, same as filmDb
