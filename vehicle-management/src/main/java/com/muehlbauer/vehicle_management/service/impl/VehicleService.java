package com.muehlbauer.vehicle_management.service.impl;

import com.muehlbauer.vehicle_management.domain.Vehicle;
import com.muehlbauer.vehicle_management.dto.VehicleDTO;
import com.muehlbauer.vehicle_management.mapper.VehicleMapper;
import com.muehlbauer.vehicle_management.repository.VehicleRepository;
import com.muehlbauer.vehicle_management.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService implements IVehicleService {
    private final VehicleRepository repository;

    @Autowired
    public VehicleService(VehicleRepository repository) {
        this.repository = repository;
    }

    @Override
    public Vehicle add(VehicleDTO dto) {
        Vehicle vehicle = VehicleMapper.mapVehicleDTOtoVehicle(dto);
        repository.save(vehicle);

        return vehicle;
    }

    @Override
    public List<Vehicle> findAll() {
        return repository.findAll();
    }

    @Override
    public void delete(int id) {
        repository.deleteById(id);
    }
}
