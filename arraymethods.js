function arraylength(){
let arr=[1,2,3,4,5]
let arr1=arr.push()
return(arr1)
}
console.log(`function to find the length of an array without using the length property : `, arraylength())





function getelementAtindex(array,index){
    get=array[index]
   return(get)
}
console.log(`returns the element at the given index in the array : `,getelementAtindex([1,2,3,4,5,6],3));





function addToArrayEnd(array, element){
    array.push(element)
    return(array)
}
console.log(`adds an element to the end of the array using the push method : `,addToArrayEnd([1,2,3],4))

// push() method effects the original array..





function removeLastElement(array){
    array.pop()
    return(array)
}
console.log(`removes the last element from the array using the pop method : `,removeLastElement([1,2,3,4,5]))





function removeFirstElement(array){
    array.shift()
    return(array)
}
console.log(`removes the first element from the array using the shift method : `,removeFirstElement([1,2,3,4,5]))





function addToArrayStart(array, element){
    array.unshift(element)
    return(array)
}
console.log(`adds an element to the beginning of the array using the unshift method : `,addToArrayStart([2,3,4,5,6],1));





function concatArrays(array1, array2){
   let ar= array1.concat(array2);
    return(ar)
}
console.log(`concatenates two arrays into a single array using the concat method : `,concatArrays([1,2,3],[4,5,6]))





function flattenArray(nestedArray){
   let anr=nestedArray.flat()
    return(anr)
}
console.log(`flattens a nested array into a single-level array using the flat method : `,flattenArray([[1,2,3,4],[5,6,7]]))




function joinArrayElements(array, separator){
let ana=array.join(separator)
return(ana)
}
console.log(`joins all elements of the array into a string with the specified separator using the join method : `,joinArrayElements(["apple", "banana", "orange"], " , "))





function arrayToString(array){
    let nagarjuna=array.toString();
    return(nagarjuna)
}
console.log(`converts an array into a string representation using the toString method : `,arrayToString([1, 2, 3, 4, 5]))






function isArray(value){
    if(Array.isArray(value))

    return(true)

else
    return(false)
}
console.log(isArray([1,2,3]))