import { inventory } from "./inventory.js";

export function getSelectedCars(inventory, listOfCars) {
    let selectedCars = [];
    for (let car of inventory) {
        let carName = car["car_make"];
        if (listOfCars.includes(carName)) {
            selectedCars.push(car);
        }
    }
    return selectedCars;
}

let listOfCars = ["BMW", "Audi"];
let selectedCars = getSelectedCars(inventory, listOfCars);
console.log(JSON.stringify(selectedCars));
