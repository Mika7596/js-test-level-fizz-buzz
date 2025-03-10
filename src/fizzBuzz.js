'use strict'

const listHistorial = [[]];

function getNumber(){

    try{
        let number = parseInt(document.getElementById("input").value);
        const divResult = document.getElementById("result");
        
        if (isNaN(number) || number == "")
            return divResult.innerHTML= "Invalid number; please try again."
        if (number % 15 == 0){
            listHistorial.push([number, "FizzBuzz"]);
            return divResult.innerHTML = "FizzBuzz"
        }
        if (number % 3 == 0){
            listHistorial.push([number, "Fizz"]);
            return divResult.innerHTML = "Fizz"
        }
        if (number % 5 == 0){
            listHistorial.push([number, "Buzz"]);
            return divResult.innerHTML = "Buzz"
        }
        else{
            listHistorial.push([number, number]);
            return divResult.innerHTML = number
        }
    } catch (e){
        throw new Error (e)
    }
}

function historial(){
    const divHistorial = document.getElementById("historial");
    
    divHistorial.innerHTML = "";

    listHistorial.forEach(item =>{
        divHistorial.innerHTML += `${item} <br>`
    })
}

// module.exports = {fizzBuzz, historial}
module.exports= {getNumber, historial};
