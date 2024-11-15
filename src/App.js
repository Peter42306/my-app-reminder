import logo from './logo.svg';
import './App.css';
import Paragraph from './components/Paragraph/Paragraph';
import Profile from './components/Profile/Profile';
import { user1, user2, user3 } from './data/usersData';


function App() {  

  return (
    <div className="App">      
      
      <Profile user={user1}></Profile>
      <Profile user={user2}></Profile>
      <Profile user={user3}></Profile>

      {/* <Profile user={user1}></Profile> */}

      {/* <Paragraph></Paragraph> */}

      {/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>        
      </header> */}
    </div>
  );
}

export default App;
