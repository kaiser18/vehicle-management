package com.muehlbauer.vehicle_management.controller;

import com.muehlbauer.vehicle_management.domain.Vehicle;
import com.muehlbauer.vehicle_management.dto.VehicleDTO;
import com.muehlbauer.vehicle_management.service.impl.VehicleService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VehicleController {
    public static final Logger LOGGER = LoggerFactory.getLogger(VehicleController.class);

    @Autowired
    private VehicleService service;

    @GetMapping("/vehicles")
    public ResponseEntity<List<Vehicle>> getVehicles() {
        List<Vehicle> vehicles = service.findAll();
        LOGGER.info("Returning all vehicles");
        return new ResponseEntity<>(vehicles, HttpStatus.OK);
    }

    @PostMapping("/vehicles")
    public ResponseEntity<Vehicle> postVehicle(@Valid @RequestBody VehicleDTO dto) {
        Vehicle vehicle = service.add(dto);

        LOGGER.info("Vehicle with id {} successfully added", vehicle.getId());
        return new ResponseEntity<>(vehicle, HttpStatus.CREATED);
    }

    @DeleteMapping("/vehicles/{id}")
    public ResponseEntity<?> deleteVehicle(@Validated @PathVariable("id") int id) {
        String message = service.delete(id);

        LOGGER.info(message);
        return new ResponseEntity<>(message,HttpStatus.OK);
    }
}
