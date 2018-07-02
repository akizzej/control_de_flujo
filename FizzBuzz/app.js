//se pide imprimir numeros del 1 al 100
//se realiza ejercicio con metodo for

/*for(var number=1; number <=100; number++){
    if( number %3 ===0 && number %5 ===0){
        console.log("FizzBuzz");
    }else if( number %3 === 0){
        console.log("Fizz");
    }else if (number % 5 === 0){
        console.log("Buzz")
    }else {
        console.log(number);
    }
   
}*/
//se pide imprimir numeros del 1 al 100
//se realiza ejercicio con metodo while

var number =1
while (number <=100){
    number++;
    if( number %3 ===0 && number %5 ===0){
        console.log("FizzBuzz");
    }else if( number %3 === 0){
        console.log("Fizz");
    }else if (number % 5 === 0){
        console.log("Buzz")
    }else {
        console.log(number);
    }

}