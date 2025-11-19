import { Button } from 'react-bootstrap';
import './App.css'
import Header from './components/Header';
import VehicleForm from './components/VehicleForm';
import VehiclesList from './components/VehiclesList';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <VehiclesList></VehiclesList>
      </div>
    </>
  )
}

export default App
