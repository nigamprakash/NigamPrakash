var Vehicle;
(function (Vehicle) {
    Vehicle[Vehicle["Car"] = 0] = "Car";
    Vehicle[Vehicle["Bike"] = 1] = "Bike";
    Vehicle[Vehicle["Truck"] = 2] = "Truck";
    Vehicle[Vehicle["Motorcycle"] = 3] = "Motorcycle";
})(Vehicle || (Vehicle = {}));
console.log("Enum values:", Vehicle);
console.log("Enum value at index 2:", Vehicle[2]);
