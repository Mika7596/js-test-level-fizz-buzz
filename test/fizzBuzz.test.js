const { expect } = require("@jest/globals");
// import { getNumber } from "../src/fizzBuzz";
const {getNumber, historial} = require ("../src/fizzBuzz.js")

/**
 * CASOS DE PRUEBA
     * Feature validación de FizzBuzz
     *  1.Cuando el usuario digite un número divisible por 3, devuelve Fizz,
     *  2.Cuando el usuario digite un número divisible por 5, devuelve Buzz,
     *  3.Cuando el usuario digite un número divisible por 3 y 5, devuelve FizzBuzz,
     *  4.Cuando el usuario digite un número que no sea divisible por 3 y 5, devuelve el número,
*/

describe('FizzBuzz test for multiples of 3 and 5', () => {
       
        test('test_returns_Fizz_when_multiple_3', () => {
            //Gherking test
            /**
             * Scenario: Número divisible por 3
             * Given un número 9
             * When el número es procesado
             * Then se muestra "Fizz"
             */

            // Arrange: Preparar el escenario
                //entrada
            let valor_entrada = 9;
                //salida
            let respuesta_esperada = "Fizz";
                //proceso - caja negra
            let fizz_buzz = new getNumber();

            // Act: ejecutar el escenario
            let resultado = fizz_buzz.respoder_fizz_buzz(valor_entrada);
        
            // Assert: Comprobar el escenario
            expect(resultado).toBe(respuesta_esperada);
        });
        test('test_returns_Buzz_when_multiple_5', () => {
            const result = getNumber(95);
            expect(result).toBe("Buzz");
        });
        test("Test returns FizzBuzz when the input is multiple of 15", () =>{
            const result = getNumber(30);
            expect(result).toBe("FizzBuzz");
        });
        test('Should pass if returns the input in case it isn\'t a multiple of 3 nor 5', () =>{
            const result = getNumber(2);
            expect(result).toBe(2);
        });
        test("Should show an error if receives an invalid number", () =>{
            const result = getNumber("");
            expect(result).toContain("Invalid")
        })
    }
)