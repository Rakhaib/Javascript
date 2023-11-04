import { inventory } from "./inventory.js";

let length=inventory.length

let lastCar=inventory[length-1]

console.log(`Last car is a ${lastCar["car_make"]} ${lastCar["car_model"]}`)