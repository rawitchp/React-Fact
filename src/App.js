import './App.css';
import NavBar from './components/NavBar';
import React,{useState} from 'react'


function App() {
  const [bgColor,setBgColor] = useState(true)
  function handleChangeBg (e) {
        // e.preventDefault()
        setBgColor(!bgColor)
  }
  return (
    <div>
      <NavBar bgColor={bgColor} handleChangeBg={handleChangeBg}/>
      <main className={bgColor ? "content-container-light" : "content-container-dark"}>
        <h1 className='main-topic'>Fun facts about React</h1>
        <ul className='list-item'>
          <li><span>Was first released in 2013</span></li>
          <li><span>Was original created by Jordan Walke</span></li>
          <li><span>Has well over 100K stars on GitHub</span></li>
          <li><span>Is maintained by Facebook</span></li>
          <li><span>Powers thousands of enterprise apps, including mobile apps</span></li>
        </ul>
      </main>
    </div>
  );
}

export default App;
