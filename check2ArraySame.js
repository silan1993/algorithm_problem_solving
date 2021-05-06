let sameCheck = (arr1, arr2) => {
    if (arr1.length != arr2.length)
        return false
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i])
        if (correctIndex < 0)
            return false
        arr2.splice(correctIndex,1)
    }
    return true
}


console.log(sameCheck([1, 2, 3, 4], [3, 4, 1, 2]))


// Here complexity will be O(n2logn)  as indexOf is also doing loop inside arr2 with every element of arr1


// So here goes the better solution


let betterSameCheck = (arr1, arr2) => {
    if (arr1.length != arr2.length)
        return false
    let arr1Object = {}
    let arr2Object = {}

    for (let i = 0; i < arr1.length; i++) {
        arr1Object[arr1[i]] ? arr1Object[arr1[i]]++ :arr1Object[arr1[i]] = 1
    }
    
    for (let j= 0; j < arr1.length; j++) {
        arr2Object[arr2[j]] ? arr2Object[arr2[j]]++ :arr2Object[arr2[j]] = 1
    }
    for (let keys in arr1Object) {
        if (!arr2Object[keys] || arr1Object[keys] != arr2Object[keys])
            return false
    }
    
    return true
}

console.log(betterSameCheck([1, 2, 3, 4,4,4], [3, 4, 1, 2,3,3]))


// here complexcity will be O(3n) or O(n) as we are only looping once into each array.So max loop will be 3* length of array Loop indivisually is far better than nested looping