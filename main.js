// Given the following list of numbers
const numList = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        } else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

mergeSort(numList);

// What is the resulting list that will be 
// sorted after 3 recursive calls to mergesort?
// [ 1, 21, 26, 45 ]

// What is the resulting list that will be 
// sorted after 16 recursive calls to mergesort?
// [ 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49 ]

// What are the first 2 lists to be merged?
// [ 21 ] && [ 1 ]

// Which two lists would be merged on the 7th merge?
// [ 1, 21, 26, 45 ] && [ 2, 9, 28, 29 ]


function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function bubbleSort(array) {
    let swaps = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            swap(array, i, i + 1);
            swaps++;
        }
    }

    if (swaps > 0) {
        return bubbleSort(array);
    }
    return array;
};

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }

    const middle = partition(array, start, end);
    array = quickSort(array, start, middle, );
    array = quickSort(array, middle + 1, end);

    return array;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);
    return j;
};

// 1.)Suppose you are debugging a quicksort implementation that is supposed 
// to sort an array in ascending order. After the first partition step has 
// been completed, the contents of the array is in the 
// following order: 3 9 1 14 17 24 22 20. 
// Which of the following statements is correct about the partition step? 
// Explain your answer.

//The pivot could have been either 14 or 17 because the values that are less than
//pivot go to one half of the array and the values greater than the pivot go to the
//other half

const quickNumList = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
// 2.)Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the 
// resulting list after the second partitioning according to the quicksort algorithm.

//[ 3, 9, 10, 12, 19, 14, 17, 16, 13, 15 ]

quickSort(quickNumList);