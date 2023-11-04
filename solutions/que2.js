import { inventory } from "./inventory.js";

function getLastCar(inventory) {
  let length = inventory.length;

  let lastCar = inventory[length - 1];

  console.log(`Last car is a ${lastCar["car_make"]} ${lastCar["car_model"]}`);
}

getLastCar(inventory);
