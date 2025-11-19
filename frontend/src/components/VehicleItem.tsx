import { FC } from "react";

interface VehicleItemProps {
    id?: number;
    model: string;
    firstRegistrationYear: string;
    cubicCapacity: number;
    fuel: string;
    mileage: string; 
    onDelete: (id: number) => void;
}

const VehicleItem : FC<VehicleItemProps> = ({id, model, firstRegistrationYear, cubicCapacity, fuel, mileage, onDelete}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{model}</td>
      <td>{firstRegistrationYear}</td>
      <td>{cubicCapacity}</td>
      <td>{fuel}</td>
      <td>{mileage}</td>
      <td>
        <button onClick={() => onDelete(id!)}
        className="delete-btn">Delete</button>
      </td>
    </tr>
  )
}

export default VehicleItem;