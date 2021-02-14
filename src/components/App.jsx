import "../styles/index.scss"
import Recipes from "./Recipes"
import icon from "../images/fooddome.png"
import iconSvg from "../images/spoon.svg"

const App = () => {
  return (
    <>
     <section className="hero"></section>
      <main>
        <section>
          <h1>Hello World, it' my React app from scratch</h1>
        </section>
        <img src={icon} alt="icon" width="250"/>
        <img src={iconSvg} alt="icon svg" width="250"/>
      <Recipes />
      </main> 
    </>
  )
}

export default App;
