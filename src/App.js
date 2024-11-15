import logo from './logo.svg';
import './App.css';
import Paragraph from './components/Paragraph/Paragraph';
import Profile from './components/Profile/Profile';
import { user1, user2, user3 } from './data/usersData';
import MobilePhones from './components/MobilePhones/MobilePhones';
import { mobilePhone1, mobilePhone2, mobilePhone3, mobilePhone4, mobilePhone5 } from './data/mobilePhonesData';


function App() {  

  return (
    <div className="App">      
      
      {/* <Profile user={user1}></Profile> */}
      {/* <Profile user={user2}></Profile> */}
      {/* <Profile user={user3}></Profile> */}
      <MobilePhones mobilePhone={mobilePhone1}></MobilePhones>
      <MobilePhones mobilePhone={mobilePhone2}></MobilePhones>
      <MobilePhones mobilePhone={mobilePhone3}></MobilePhones>
      <MobilePhones mobilePhone={mobilePhone4}></MobilePhones>
      <MobilePhones mobilePhone={mobilePhone5}></MobilePhones>
      
      
      
      

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
