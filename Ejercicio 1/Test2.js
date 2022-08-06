
function calculateMaxEvenSum(array){

    let total = 0;

    //Recorro el arreglo y voy sumando el total

    for (let i=0; i < array.length; ++i) {
        total += array[i];
    }

    //Si el valor es par lo retorno
    if (total % 2 == 0) {
        return total+" Es par";
    }

    else{
        return total+" No es par";
    }

    //Sino itero sobre el arreglo y remuevo el menor número impar
    //de la suma
  /*  let lastOdd = 0;

    for (let i=0; i < array.length; ++i) {
        if (array[i] % 2 == 1 && (lastOdd == 0 || array[i] < lastOdd)) {
            total += lastOdd;
            total -= array[i];
            lastOdd = array[i];
        }
    }
*/
    
    return total;
}

console.log("[2, 3, 6, 10, 1, 1]"+" = "+calculateMaxEvenSum([2, 3, 6, 10, 1, 1]));
console.log("[2, 3, 6, -5, 10, 1, 1]"+" = "+calculateMaxEvenSum([2, 3, 6, -5, 10, 1, 1]));
console.log("[2, 6, 10, 1, 1]"+" = "+calculateMaxEvenSum([2, 6, 10, 1, 1]));
console.log("[2, 3, 6, 10, 1]"+" = "+calculateMaxEvenSum([2, 3, 6, 10, 1]));
