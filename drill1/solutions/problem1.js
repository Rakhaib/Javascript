import { inventory } from "./inventory.js";

function getCarbyID(inventory, id) {
    for (let car of inventory) {
        if (car["id"] == id) {
            return `Car ${id} is a ${car["car_year"]} ${car["car_make"]} ${car["car_model"]}`;
        }
    }
}

getCarbyID(inventory, 33);

export { getCarbyID };
