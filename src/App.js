  import logo from './logo.svg';
import './App.css';
import Counter from"./components/Counter";
import RandomNumber from "./components/RandomNumber";

function App() {
  return (
    <div>
      <header className = "app">
        <div className='counter'> 
          
          <Counter/>
        </div>
       <div className='random'><RandomNumber/></div>
        
      </header>
    </div>
  );
}

export default App;