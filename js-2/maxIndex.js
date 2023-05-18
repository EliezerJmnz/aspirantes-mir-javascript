function maxIndex(arr) {

    if(arr.length === 0){
        return -1 ;
    }
    
    let maximo = arr[0] ;
    let indice = 0 ;

    for(let i = 0 ; i < arr.length ; i++){
        if (maximo < arr[i]){ ;
        maximo = arr[i] ;
        indice = i ;
        }
    }
    return indice
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1