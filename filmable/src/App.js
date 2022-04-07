import "./App.css";
import FilmImage from "./Components/FilmImage";

function App() {
  const filmDb = [
    {
      id: 1,
      title: "The French Dispatch",
      img: "https://i.ytimg.com/vi/3DOp3A_2fIM/sddefault.jpg",
    },
    {
      id: 2,
      title: "The Adam Project",
      img: "https://www.denofgeek.com/wp-content/uploads/2022/03/adam.jpg?resize=768%2C432",
    },
    {
      id: 3,
      title: "The Fast and Furious: Tokyo Drift",
      img: "https://images.mubicdn.net/images/film/41368/cache-34957-1638464487/image-w1280.jpg?size=800x",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Filmable</h1>
        <FilmImage filmDb={filmDb}></FilmImage>
      </header>
    </div>
  );
}

export default App;
