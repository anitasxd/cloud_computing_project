import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my Favorite Taiwanese Foods!
        </p>
        <a
          className="App-link"
          href="https://www.allrecipes.com/recipe/17794/beef-noodle-soup/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beef Noodle Soup
        </a>
      </header>
    </div>
  );
}

export default App;
