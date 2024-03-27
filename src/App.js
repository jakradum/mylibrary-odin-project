import logo from './logo.svg';
import './App.css';
import BookBox from './Library Components';

function App() {
  return (
    <div className="App">
      <header className='display-2'>
        My Library | The Odin Project
      </header>
      <main>
        <BookBox />
      </main>
    </div>
  );
}

export default App;
