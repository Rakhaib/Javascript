import { inventory } from "./inventory.js";

export default function getAllYears(inventory) {
    let years = [];
    for (let car of inventory) {
        years.push(car["car_year"])
    }
    return years;
}

let allYears = getAllYears(inventory);
// console.log(allYears);

// module.exports=getAllYears