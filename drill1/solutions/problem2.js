import { inventory } from "./inventory.js";

export function getLastCar(inventory) {
  let length = inventory.length;

  let lastCar = inventory[length - 1];

  return(`Last car is a ${lastCar["car_make"]} ${lastCar["car_model"]}`);
}

getLastCar(inventory);
