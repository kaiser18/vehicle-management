package com.muehlbauer.vehicle_management.controller;

import com.muehlbauer.vehicle_management.domain.Vehicle;
import com.muehlbauer.vehicle_management.dto.VehicleDTO;
import com.muehlbauer.vehicle_management.service.impl.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VehicleController {

    @Autowired
    private VehicleService service;

    @GetMapping("/vehicles")
    public ResponseEntity<List<Vehicle>> getVehicles() {
        List<Vehicle> vehicles = service.findAll();
        return new ResponseEntity<>(vehicles, HttpStatus.OK);
    }

    @PostMapping("/vehicles")
    public ResponseEntity<Vehicle> postVehicle(@RequestBody VehicleDTO dto) {
        Vehicle vehicle = service.add(dto);

        return new ResponseEntity<>(vehicle, HttpStatus.CREATED);
    }

    @DeleteMapping("/vehicles/{id}")
    public ResponseEntity<?> deleteVehicle(@PathVariable("id") int id) {
        service.delete(id);

        return new ResponseEntity<>("Vehicle successfully deleted.",HttpStatus.OK);
    }
}
