import logo from './logo.svg';
import bns from './bns.jpg';
import sp from './sp.jpg';
import tb from './tb.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Favorite Taiwanese Foods!
        </p>
        <a
          className="App-link"
          href="https://www.allrecipes.com/recipe/17794/beef-noodle-soup/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beef Noodle Soup
        </a>
        <img src={bns} className="App-image" alt="image" />
        <p>
          Juicy, hearty, and warm. Beef Noodle Soup brings me back to childhood memory of my grandmas cooking
        </p>

        <a
          className="App-link"
          href="https://www.bonappetit.com/recipe/scallion-pancakes-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Scallion Pancakes
        </a>
        <img src={sp} className="App-image" alt="image" />
        <p>
          Savory, flakey, aromatic. Scallion pancakes is one of my favorite snacks!
        </p>

        <a
          className="App-link"
          href="https://www.wokandkin.com/taro-and-sweet-potato-balls-dessert/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Taro Balls Dessert
        </a>
        <img src={tb} className="App-image" alt="image" />
        <p>
          Chewy, refreshing, quenching. Pair Taro Balls with other toppings for the best dessert choice!
        </p>
      </header>
    </div>
  );
}

export default App;
