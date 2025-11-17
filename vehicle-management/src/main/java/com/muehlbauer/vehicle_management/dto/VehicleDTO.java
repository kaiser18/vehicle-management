package com.muehlbauer.vehicle_management.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class VehicleDTO {
    private String model;
    private String firstRegistrationYear;
    private int cubicCapacity;
    private String fuel;
    private String mileage;
}
