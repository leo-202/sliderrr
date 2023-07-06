import BackgroundSlider from "react-background-slider";
import "./styles.css";
import image1 from "./Assets/first.jpg";
import image2 from "./Assets/second.jpg";
import image3 from "./Assets/third.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="Card">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <BackgroundSlider
        images={[image1, image2, image3]}
        duration={5}
        transition={2}
      />
    </div>
  );
}
