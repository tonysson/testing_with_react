
import './App.css';
import Congrats from './Congrats';
import GuessWords from './GuessWords';
import Input from './Input';

function App() {

  const success = false ;
  const secretWord = 'party';
  const guessedWords = []

  return (
    <div className="container" data-test="component-app">
      <h1 className="text-center m-5 text-primary">Jotto</h1>
      <Congrats success={true}/>
      <Input success={success}  secretWord={secretWord}/>
      <GuessWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
