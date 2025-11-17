package com.muehlbauer.vehicle_management.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "vehicles")
@Getter
@Setter
@NoArgsConstructor
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(length = 40)
    private String model;
    @Column(length = 4)
    private String firstRegistrationYear;
    @Column(length = 4)
    private int cubicCapacity;
    private String fuel;
    @Column(length = 7)
    private String mileage;

    public Vehicle(String model, String firstRegistrationYear, int cubicCapacity, String fuel, String mileage) {
        this.model = model;
        this.firstRegistrationYear = firstRegistrationYear;
        this.cubicCapacity = cubicCapacity;
        this.fuel = fuel;
        this.mileage = mileage;
    }
}
