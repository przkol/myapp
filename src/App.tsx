import { Users } from './components/Users/Users';
import styles from './App.module.scss';
function App() {


  return (
    <div className={styles.root}>
      <header className="App-header">
        <h1>My React/Redux App</h1>
      </header>
      <Users/>
    </div>
  );
}

export default App;
