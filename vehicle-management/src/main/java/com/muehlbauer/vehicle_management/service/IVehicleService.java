package com.muehlbauer.vehicle_management.service;

import com.muehlbauer.vehicle_management.domain.Vehicle;
import com.muehlbauer.vehicle_management.dto.VehicleDTO;

import java.util.List;

public interface IVehicleService {
    Vehicle add(VehicleDTO dto);
    List<Vehicle> findAll();
    String delete(int id);
}
