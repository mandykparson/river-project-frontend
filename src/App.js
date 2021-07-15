import './App.css';
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import RiverForm from "./Components/RiverForm"
import RiverStretchRoutes from "./Components/RiverStretchRoutes"
import StretchSelection from './Components/StretchSelection';
import { useState, useEffect } from "react"
import 'mapbox-gl/dist/mapbox-gl.css'

function App() {

  const [location, setLocation ] = useState('Colorado')
  const [classRating, setClassRating] = useState('1')
  const [length, setLength] = useState('20')
  const [selection, setSelection ] = useState(undefined)
  const [riverStretches, setRiverStretches] = useState([])
  const [filteredStretches, setFilteredStretches] = useState([])
  const [loginButtonPopup, setLogInButtonPopup] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/river_stretches')
      .then(response => response.json())
      .then(riverStretchesAPI => setRiverStretches(riverStretchesAPI))
  }, [])


  return (
    <div className="App">
      <div className="header">
        <h1>The River Project</h1>
        <div className="logandsignbuttons">
          <button id="login" onClick={() => {setLogInButtonPopup(!loginButtonPopup)}}>Login</button> 
          <Login trigger={loginButtonPopup} setLogInButtonPopup={setLogInButtonPopup}/>
          <button id="signup" onClick={() => {setButtonPopup(!buttonPopup)}}>Sign Up</button> 
          <Signup trigger={buttonPopup} setButtonPopup={setButtonPopup}/>
        </div>
      </div>
    
    {selection ? 
      <div>
        <StretchSelection 
          selection={selection}
          setSelection={setSelection}
          />
      </div> :
      <div> 
      <RiverForm 
        location={location}
        setLocation={setLocation}
        classRating={classRating}
        setClassRating={setClassRating}
        length={length}
        setLength={setLength}
        selection={selection}
        setSelection={setSelection} 
        riverStretches={riverStretches}
        setRiverStretches={setRiverStretches}
        filteredStretches={filteredStretches}
        setFilteredStretches={setFilteredStretches}
      />
      <RiverStretchRoutes 
        riverStretches={riverStretches}
        setRiverStretches={setRiverStretches}
        filteredStretches={filteredStretches}
        setFilteredStretches={setFilteredStretches}
        selection={selection}
        setSelection={setSelection}
      />
    </div>}
  </div>
  );
}

export default App;
