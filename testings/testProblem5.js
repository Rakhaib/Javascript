import { customCars } from "./customTestCase.js";
import getAllYears from "../solutions/problem4.js";
import { getCount } from "../solutions/problem5.js";

let allCarYears=getAllYears(customCars);

console.log(getCount(allCarYears,2000));