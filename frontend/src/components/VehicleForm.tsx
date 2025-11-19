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

    const [error, setError] = useState('');

    const handleOnChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleOnSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData.model.trim() === '' || formData.firstRegistrationYear.trim() === '' || formData.cubicCapacity === 0 || formData.fuel.trim() === '' || formData.mileage.trim() === '') {
            setError('Please fill in all fields.');
            return;
        } else if (formData.model.trim().length > 40) {
            setError('Model name is too long (max 40 characters).');
            return;
        } else if (!formData.firstRegistrationYear.match(/^\d{4}$/g)) {
            setError('First registration year must be exactly 4 digits.');
            return;
        } else if (formData.cubicCapacity > 9999) {
            setError('Cubic capacity is too high (max 9999).');
            return;
        } else if (!formData.mileage.trim().match(/^\d{1,7}$/g)) {
            setError('Mileage is too long (max 7 digits).');
            return;
        } else {
            try {
            await addVehicle(formData);
            setError('');
            onSave();
            } catch (error) {
                console.error("Error adding vehicle:", error);
            }
        }
        
    };

    return (
        <Form onSubmit={handleOnSubmit} className="vehicle-form">
            {error && <p className="errorMsg">{error}</p>}
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
                    min="0"
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