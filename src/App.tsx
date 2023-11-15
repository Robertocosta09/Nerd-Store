
import './App.css';
import NavBar from './Components/navbar';

function App() {

  const handleClick = () => {
    console.log('Entrou')
  }
  return (
    <div className="App">
    <NavBar/>

        <button onClick={handleClick}>Teste</button>
    </div>
  );
}

export default App;
