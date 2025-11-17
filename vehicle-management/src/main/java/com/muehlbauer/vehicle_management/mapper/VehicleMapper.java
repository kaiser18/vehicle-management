package com.muehlbauer.vehicle_management.mapper;

import com.muehlbauer.vehicle_management.domain.Vehicle;
import com.muehlbauer.vehicle_management.dto.VehicleDTO;

public class VehicleMapper {
    public static Vehicle mapVehicleDTOtoVehicle(VehicleDTO dto) {
        Vehicle vehicle = new Vehicle();
        vehicle.setModel(dto.getModel());
        vehicle.setFirstRegistrationYear(dto.getFirstRegistrationYear());
        vehicle.setCubicCapacity(dto.getCubicCapacity());
        vehicle.setFuel(dto.getFuel());
        vehicle.setMileage(dto.getMileage());

        return vehicle;
    }
}
