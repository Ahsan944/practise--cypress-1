const { type } = require("cypress/types/jquery")

const counter = 0 
const greeting = "hello"

const car = {
    color :'red',
    electric:true 


}

typeof counter
typeof greeting 

typeof car
typeof car.color
typeof car.electric



type Evennumbers = 2|4|6|8
const add = (a: Evennumbers , b: Evennumbers) => {
    return a+b
}

add ('1','1')   // 11

