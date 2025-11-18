import './App.css'
import Header from './components/Header';
import VehicleForm from './components/VehicleForm';
import VehiclesList from './components/VehiclesList';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <VehicleForm onSave={() => {}}></VehicleForm>
        <VehiclesList></VehiclesList>
      </div>
    </>
  )
}

export default App
