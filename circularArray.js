const string = "abcde"
// bcdea
// cdeab

const LS = 2
const RS = 2


const circular = (string, l, r) => {

    let splitted = string.split('')

    for (let i = 0; i < l; i++) {
        const rotated = leftRotate(splitted)
        splitted = rotated
    }

    for (let i = 0; i < r; i++) {
        const rotated = rightRotate(splitted)
        splitted = rotated
    }
    console.log(string)
    console.log(splitted.join(''))
}

const leftRotate = (arr) => {
    let temp;
    for (let index = 0; index < arr.length; index++) {
        if (index == 0) temp = arr[index]
        arr[index] = arr[index + 1]
        if (index == arr.length - 1) arr[arr.length - 1] = temp
    }
    return arr
}

const rightRotate = (arr) => {

    let tempArr = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (i == 0) {
            tempArr.push(arr[arr.length - 1])
            tempArr.push(arr[i])
        }
        else tempArr.push(arr[i])
    }
    return tempArr
}

const lf1 = (arr) => {

    let tempArr = [];
    let temp
    for (let i = 0; i < arr.length - 1; i++) {
        if (i == 0) temp = arr[i]
        else tempArr.push(arr[i])
        if (i == arr.length) tempArr.push(temp)
    }
    return tempArr
}

circular(string, LS, RS)