function flip(array, n) { //O(n)
    var tmp = []; //O(1)

    if (n > array.length) {
        array.reverse(); //O(n)
        return array; //O(1)
    }
    else {
        for (i = 0; i < n; i++) { //runs n times
            tmp.push(array[i]); //O(n)
        }
        
        tmp.reverse(); //O(n)
        
        for (i = 0; i < n; i++) { //runs n times
            array[i] = tmp[i]; //O(n)
        }
        return array; //O(1)
    }
}

function pancakeSort(array) {
    var numSorted = 0; //O(1)
    while (numSorted != array.length) { //O(n) (since after every iteration, one element is moved to it's correct position)
        var g8El = array[0]; //O(1)
        for (i = 0; i < (array.length - numSorted); i++) { //runs O(n), O(n-1), O(n-2)...O(n^2) because it is the sum of the first n ints
            if (array[i] > g8El) {
                g8El = array[i]; //O(1) -> //O(n)
            }
        }

        if (g8El != array[0]) {
            flip(array, array.indexOf(g8El) + 1); //O(n)
            if (numSorted == 0) {
                flip(array, (array.length + 1)); //O(n)
                numSorted += 1; //O(1)
            }
            else {
                flip(array, (array.length - numSorted)); //O(n)
                numSorted += 1; //O(1)
            }
        }
        else {
            if (numSorted == 0) {
                flip(array, (array.length + 1)); //O(n)
                numSorted += 1; //O(1)
            }
            else {
                flip(array, (array.length - numSorted)); //O(n)
                numSorted += 1; //O(1)
            }
        }
    }
    return array; //O(1)
}
