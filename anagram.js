let checkAnagram = (str1, str2) => {
    if (str1.length != str2.length)
        return false
    let strObject = {}

    for (let i = 0; i < str1.length; i++) {
        strObject[str1[i]] ? strObject[str1[i]]++ : strObject[str1[i]] =1
    }
    for (let j = 0; j < str2.length; j++) {
        if (!strObject[str2[j]]) // checking the char is not present or value is 0
            return false
        else {
            strObject[str2[j]]--
        }
    }
    return true
}

console.log(checkAnagram('silasnnnn', 'linnnasan'))


// here complexcity will be O(n).looping is happening 2n number of times.