import { customCars } from "../customTestCase.js";

const carId1=customCars.filter(
    function(car){
        if(car.id==1){
            return car;
        }
    }
);

console.log(carId1);