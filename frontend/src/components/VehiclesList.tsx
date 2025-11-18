import { useEffect, useState } from "react";
import { Vehicle } from "../types/Vehicle";
import { getVehicles } from "../services/api";

const VehiclesList = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    const fetchVehicles = async () => {
        const data = await getVehicles();
        setVehicles(data);
    }

    useEffect(() => {
        fetchVehicles();
    }, []);

    return (
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
              <tr>
                <td>{id}</td>
                <td>{model}</td>
                <td>{firstRegistrationYear}</td>
                <td>{cubicCapacity}</td>
                <td>{fuel}</td>
                <td>{mileage}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}   

export default VehiclesList;