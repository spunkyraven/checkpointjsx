import "./App.css";
import myWonderfulImage from "./BOX.jpg";
import myWonderfulvideo from "./Super.mp4";

function App() {
  return (
    <div className="App">
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red"> VR </h1> <br />
          <img src={myWonderfulImage} alt="myImage" />
          <br />
          <img src="/VR.jpg" alt="2" />
        </div>{" "}
        <video width={320} height={240} controls>
          <source src={myWonderfulvideo} type="video/mp4" />
        </video>{" "}
      </div>
    </div>
  );
}

export default App;
