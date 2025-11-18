import axios from 'axios';
import { Vehicle } from '../types/Vehicle'; 

const API_URL = 'http://localhost:8080/vehicles';

export const getVehicles = async (): Promise<Vehicle[]> => {
    const response = await axios.get(API_URL);
    return response.data;
}

export const addVehicle = async (vehicle: Vehicle): Promise<Vehicle> => {
    const response = await axios.post(API_URL, vehicle);
    return response.data;
}

export const deleteVehicle = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
}