import React, { useState } from 'react'
import './App.css'
import PhotoBlackpink from './components/PhotoBlackpink'
import NewLoginForm from './components/NewLoginForm';
import firebase from 'firebase/app';
import config from './firebase/config'
import 'firebase/auth';
import Content from './components/Content'


firebase.initializeApp(config);

function App() {

  const [Login, setLogin] = useState(false);


  return (
    <div className="App">
      {Login === false ? <NewLoginForm setLogin={setLogin}/> : null  }
      {Login &&  <Content />  }
    </div>
  );
}

export default App;
