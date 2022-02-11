import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getPeople } from './store/starWars/actions';
import { People } from './components/People/People';

function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getPeople())
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React/Redux App</h1>
        <People/>
      </header>
    </div>
  );
}

export default App;
