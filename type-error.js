const nums=5;
// nums.push(10);/* TypeError: nums.push is not a function */

// let address;
// console.log(address.home);/* TypeError: Cannot read properties of undefined */

// let address={
//     city :'bBaria',
//     manush: 'ogro'
// }
// console.log(address.district); /* undefined */
let address={
    city :'bBaria',
    manush: 'ogro'
}
// console.log(address.district.thana); /* TypeError: Cannot read properties of undefined (reading 'thana') */
console.log(address?.district?.thana); /* undefined ----optional chaining korle error dibe na ust undefined dekhabe*/


const a='abul';
a='habul'; /* TypeError: Assignment to constant variable. */
