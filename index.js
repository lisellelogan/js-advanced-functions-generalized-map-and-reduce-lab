// MAP LIKE METHODS

function map(arr, func){
    let newArr = []

    for (let i = 0; i < arr.length; i++){
        let num = arr[i]
        newArr.push(func(num))
    }
    return newArr;
}

// REDUCE LIKE METHODS
function reduce(arr, func, startingPoint){
    let newArr = (!!startingPoint) ? startingPoint : arr[0]
    let i = (!!startingPoint) ? 0 : 1

    for (; i < arr.length; i++){
        newArr = func(arr[i], newArr)
    }
    return newArr;
}