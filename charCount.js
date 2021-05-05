let charCount = char => {
    let result ={}
    for (let index = 0; index < char.length; index++) {
        if (result[char.charAt(index)])
            result[char.charAt(index)]++
        else
            result[char.charAt(index)] =1
    }

    return result
}

console.log(charCount('subhrajyoti mishra'))

