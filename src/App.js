import './App.css';
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import RiverForm from "./Components/RiverForm"
import RiverStretchRoutes from "./Components/RiverStretchRoutes"
import { useState, useEffect } from "react"

function App() {

  const [location, setLocation ] = useState('Colorado')
  const [classRating, setClassRating] = useState('1')
  const [length, setLength] = useState('20')
  const [selection, setSelection ] = useState('')
  const [riverStretches, setRiverStretches] = useState([])
  const [filteredStretches, setFilteredStretches] = useState([{name:"No Stretches Found"}])

  useEffect(() => {
    fetch('http://localhost:3000/river_stretches')
      .then(response => response.json())
      .then(riverStretchesAPI => setRiverStretches(riverStretchesAPI))
  }, [])

  return (
    <div className="App">
      <h1>The River Project</h1>
      <h2>Login</h2> 
      <Login />
      <h2>Sign Up</h2>
      <Signup />
      <h2>Choose Your Next Adventure</h2>
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
      />
    </div>
  );
}

export default App;
