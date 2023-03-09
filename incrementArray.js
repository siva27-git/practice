// let arr1 = [12, 13, 15, 16, 17]
// let arr2 = [12, 18, 21, 24, 27, 30, 33, 36]

// const missingEle = (arr) => {
//     const minEle = arr[0];
//     const maxEle = arr[arr.length - 1];
//     const incrementer = (maxEle - minEle) / arr.length;

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] + incrementer != arr[i + 1]) return arr[i] + incrementer
//     }
// }

// console.log(missingEle(arr2))


// missingEle(arr2)



// let doc = [
//     {
//         "id": 1,
//         "name": "Arun",
//         "class": "A"
//     },
//     {
//         "id": 2,
//         "name": "Axay",
//         "class": "B"
//     },
//     {
//         "id": 3,
//         "name": "Shubhash",
//         "class": "B"
//     },
//     {
//         "id": 4,
//         "name": "Suhani",
//         "class": "C"
//     }
// ]

// const final = doc.reduce((acc, curr) => {
//     if (acc[curr.class]) acc[curr.class].push(curr.id)
//     else acc[curr.class] = [curr.id]
//     return acc
// }, {})

// console.log(final)




//Output: { A: [1], B: [2, 3], C: [4] }

// let nums = [2, 5, 5, 11]
// let target = 10

// const fun = (nums, target) => {

//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// }

// console.log(fun(nums, target))


// const x = 121

// const palindrome = (x) => {
//     console.log(x.toString().split('').reverse().join('') == x)

// }

// palindrome(x)

// let arr = [1, 1, 2]

// const nonDupl = (arr) => {
//     arr = [... new Set(arr)]
//     return arr

// }
// console.log(nonDupl(arr))




