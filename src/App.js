import './App.css';
import {MainScreen, CreateHabbit, Statistics, Settings}  from './components';
import Meditations from "./imgs/meditation.png";

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <img alt="meditation" src={Meditations} className='imgMeditation'/>
        <header className='glass'>
          <div className='logo'>😎 Habbits Tracker</div>
            <nav>
            <ul>
              <li>Main info</li>
              <li>Statistics</li>
              <li>Settings</li>
              <li>Add Habbit</li>
            </ul>
          </nav>
        </header>
         <section className='glass'>
          <MainScreen/>
          <CreateHabbit />
          <Statistics/>
          <Settings/>
         </section>
        <div className="circleGradient"></div>
      </div>
    </div>
  );
}

export default App;
