package com.muehlbauer.vehicle_management.service.impl;

import com.muehlbauer.vehicle_management.domain.Vehicle;
import com.muehlbauer.vehicle_management.dto.VehicleDTO;
import com.muehlbauer.vehicle_management.mapper.VehicleMapper;
import com.muehlbauer.vehicle_management.repository.VehicleRepository;
import com.muehlbauer.vehicle_management.service.IVehicleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService implements IVehicleService {
    public static final Logger LOGGER = LoggerFactory.getLogger(VehicleService.class);

    private final VehicleRepository repository;

    @Autowired
    public VehicleService(VehicleRepository repository) {
        this.repository = repository;
    }

    @Override
    public Vehicle add(VehicleDTO dto) {
        Vehicle vehicle = VehicleMapper.mapVehicleDTOtoVehicle(dto);
        repository.save(vehicle);

        LOGGER.info("Vehicle successfully added");
        return vehicle;
    }

    @Override
    public List<Vehicle> findAll() {
        LOGGER.info("Returning all vehicles");
        return repository.findAll();
    }

    @Override
    public void delete(int id) {
        LOGGER.info("Vehicle successfully deleted");
        repository.deleteById(id);
    }
}
