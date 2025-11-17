package com.muehlbauer.vehicle_management.dto;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class VehicleDTO {
    @NotBlank (message = "Model can't be empty")
    @Size(max = 40, message = "Length of the model can't be greater than 40 characters")
    private String model;
    @NotBlank (message = "First registration year can't be empty")
    @Size(max = 4, message = "Length of the year can't be greater than 4 characters")
    private String firstRegistrationYear;
    @Min(value = 0, message = "Capacity can't be lower than 0")
    @Max(value = 9999, message = "Capacity can't be greater than 9999")
    private int cubicCapacity;
    @NotBlank (message = "Fuel can't be empty")
    private String fuel;
    @NotBlank (message = "Mileage can't be empty")
    @Size(max = 7, message = "Length of mileage can't be greater than 7 characters")
    private String mileage;
}
