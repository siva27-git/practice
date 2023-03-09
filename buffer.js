const buffer = new Buffer.from("siva")

console.log(buffer) // <Buffer 73 69 76 61> in hexa decimal
console.log(buffer.toJSON()) // { type: 'Buffer', data: [ 115, 105, 118, 97 ] } in unicode
console.log(buffer.toString()) // siva

