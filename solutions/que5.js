import getAllYears from "./que4.js"
// import 

export function getCount(cars,year2000){
    let count=0;
    for(let year of cars){
        if(year<year2000){
            // console.log(year);
            count++;
        }
    }return count;
}

let cars=getAllYears()
// console.log(cars);
console.log(getCount(cars,2000));