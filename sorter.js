const arr = [20, 65, 12, 300, 76, 9, 876, -5]

// const sort = (arr) => {

//     for (let i = 0; i < arr.length - 1; i++) {

//         for (let j = 0; j < arr.length - i - 1; j++) {

//             if (arr[j] > arr[j + 1]) { // for ascending use > for descending use <
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
// };

const sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

console.log(sort([5, 4, 3, 7, 9]))



