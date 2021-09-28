const nums= [673, 251, 1, 6, 56, 84, 633, 343, 252, 873]

function returnFirstElement(arr) {
    console.log(arr[0]) 
}

returnFirstElement(nums)

/////// 

function returnLastElement(arr) {
    console.log(arr.pop(9))
}

returnLastElement(nums)

////// Create a Multidimensional Array

// Write a JS function to get the first element of the first subarray.

const Array=[[64,36,93],[735,625,908],[234,83,65],[24,95,22]]

function returnFirstElementSub(arr) {
    console.log(arr[0][0])
}

returnFirstElementSub(Array)

// Write a JS function to get the last element of the last subarray.

function returnLastElementSub(arr) {
    console.log(arr.pop(3)[2])
}

returnLastElementSub(Array)

// Write a JS function to get a given element of a subarray with the indexes passed as a parameters.


// Write a JS function to get the index of an element in a subarray and the index of the subarray
// Where it's element matches a valued passed as a parameter.