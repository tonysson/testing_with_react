
import './App.css';
import Congrats from './Congrats';
import GuessWords from './GuessWords';

function App() {
  return (
    <div className="container ">
      <h1 className="text-center m-5 text-primary">Jotto</h1>
      <Congrats success={true}/>
      <GuessWords guessedWords={[{guessedWord: 'train' , letterMatchCount : 3}]} />
    </div>
  );
}

export default App;
