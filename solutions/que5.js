import getAllYears from "./que4.js"
// import 

function getCount(rs){
    for(year in rs){
        console.log("The count of years is "+year)
    }
}

let rs=getAllYears;
getCount(rs)