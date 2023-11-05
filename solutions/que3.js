import { inventory } from "./inventory.js";


export function sortAlphabetically(inventory) {
    inventory.sort((a, b) => {
        return a.car_model.localeCompare(b.car_model);
    })
    return inventory
}

const result = sortAlphabetically(inventory)