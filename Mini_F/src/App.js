import React, { useState } from 'react'
import './App.css'
import PhotoBlackpink from './components/PhotoBlackpink'
import NewLoginForm from './components/NewLoginForm';
import firebase from 'firebase/app';
import config from './firebase/config'
import 'firebase/auth';



firebase.initializeApp(config);

function App() {

  const [Login, setLogin] = useState(false);


  return (
    <div className="App">
      <h1>BLΛƆKPIИK(블랙핑크) </h1>
      {Login === false ? <NewLoginForm setLogin={setLogin}/> : null  }
      {Login && <PhotoBlackpink />  }
    </div>
  );
}

export default App;
