import 'Src/assets/styles/global.css';
import icon from 'Src/assets/images/fooddome.png';
import iconSvg from 'Src/assets/images/spoon.svg';
import Recipes from './Recipes';

const App = () => (
  <>
    <section className="hero" />
    <main>
      <section>
        <h1>Hello World, it's my React app from scratch</h1>
      </section>
      <img src={icon} alt="icon" width="250" />
      <img src={iconSvg} alt="icon svg" width="250" />
      <Recipes />
    </main>
  </>
);

export default App;
