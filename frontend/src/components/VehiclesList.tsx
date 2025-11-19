import { useEffect, useState } from "react";
import { Vehicle } from "../types/Vehicle";
import { deleteVehicle, getVehicles } from "../services/api";
import VehicleItem from "./VehicleItem";
import VehicleForm from "./VehicleForm";

const VehiclesList = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    const [showForm, setShowForm] = useState(false);

    const fetchVehicles = async () => {
        const data = await getVehicles();
        setVehicles(data);
    }

    useEffect(() => {
        fetchVehicles();
    }, []);

    const handleSubmit = () => {
        setShowForm(false);
        fetchVehicles();
    }

    const handleDelete = async (id: number) => {
        await deleteVehicle(id);
        fetchVehicles();
    }

    return (
    <div>
      <button className="btn" onClick={() => setShowForm(true)}>Add vehicle</button>
      {
        showForm && (<VehicleForm onSave={handleSubmit}></VehicleForm>)
      }
      <div className='vehicles-list'>
        <h3 className='vehicles-list-title'>List of Vehicles</h3>
        <div className='vehicles-list-table-container'>
          <table className='vehicles-list-table'>
            <thead className='vehicles-list-header'>
              <tr>
                <th>ID</th>
                <th>Model</th>
                <th>First Registration Year</th>
                <th>Cubic Capacity</th>
                <th>Fuel</th>
                <th>Mileage</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map(({ id, model, firstRegistrationYear, cubicCapacity, fuel, mileage }) => (
                <VehicleItem 
                  key={id}
                  id={id}
                  model={model}
                  firstRegistrationYear={firstRegistrationYear}
                  cubicCapacity={cubicCapacity}
                  fuel={fuel}
                  mileage={mileage}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}   

export default VehiclesList;