import { inventory} from "./inventory.js";

export default function getAllYears(cars=inventory) {
    let years = [];
    for (let car of cars) {
        years.push(car["car_year"])
    }
    return years;
}

let allYears = getAllYears(inventory);
// console.log(allYears);

// module.exports=getAllYears