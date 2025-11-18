import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { Vehicle } from "../types/Vehicle";
import { addVehicle } from "../services/api";

interface VehicleFormProps {
    onSave: () => void;
}
const VehicleForm = ({onSave}: VehicleFormProps) => {
    const [formData, setFormData] = useState<Vehicle>({
        model: '',
        firstRegistrationYear: '',
        cubicCapacity: 0,
        fuel: '',
        mileage: ''
    });

    const handleOnChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleOnSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await addVehicle(formData);
            onSave();
        } catch (error) {
            console.error("Error adding vehicle:", error);
        }
    };

    return (
        <Form onSubmit={handleOnSubmit} className="vehicle-form">
            <FormGroup controlId='model'>
                <Form.Label>Model</Form.Label>
                <Form.Control
                    className="model"
                    name="model" 
                    type="text"
                    value={formData.model}
                    onChange={handleOnChange}
                />
            </FormGroup>
            <FormGroup controlId='firstRegistrationYear'>
                <Form.Label>First Registration Year</Form.Label>
                <Form.Control
                    className="firstRegistrationYear"
                    name="firstRegistrationYear" 
                    type="text"
                    value={formData.firstRegistrationYear}
                    onChange={handleOnChange}
                />
            </FormGroup>
            <FormGroup controlId='cubicCapacity'>
                <Form.Label>Cubic Capacity</Form.Label>
                <Form.Control
                    className="cubicCapacity"
                    name="cubicCapacity" 
                    type="number"
                    value={formData.cubicCapacity}
                    onChange={handleOnChange}
                />
            </FormGroup>
            <FormGroup controlId='fuel'>
                <Form.Label>Fuel</Form.Label>
                <Form.Control
                    className="fuel"
                    name="fuel" 
                    type="text"
                    value={formData.fuel}
                    onChange={handleOnChange}
                />
            </FormGroup>
            <FormGroup controlId='mileage'>
                <Form.Label>Mileage</Form.Label>
                <Form.Control
                    className="mileage"
                    name="mileage" 
                    type="text"
                    value={formData.mileage}
                    onChange={handleOnChange}
                />
            </FormGroup>
            <Form.Group controlId='submit'>
                <Button variant="primary" type="submit" className="submit-btn">
                    Add Vehicle
                </Button>
            </Form.Group>
        </Form>
    );
}

export default VehicleForm;