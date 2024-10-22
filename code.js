function flip(array, n) {
    var tmp = [];

    if (n > array.length) {
        array.reverse();
        return array;
    }
    else {
        for (i = 0; i < n; i++) {
            tmp.push(array[i]);
        }
        
        tmp.reverse();
        
        for (i = 0; i < n; i++) {
            array[i] = tmp[i];
        }
        return array;
    }
}

function pancakeSort(array) {
    var numSorted = 0;
    while (numSorted != array.length) {
        var g8El = array[0];
        for (i = 0; i < (array.length - numSorted); i++) {
            if (array[i] > g8El) {
                g8El = array[i];
            }
        }

        if (g8El != array[0]) {
            n = 0;
            while (n <= array.indexOf(g8El)) {
                n += 1;
            }
            flip(array, n);
            if (numSorted == 0) {
                flip(array, (array.length + 1));
                numSorted += 1;
            }
            else {
                flip(array, (array.length - numSorted));
                numSorted += 1;
            }
        }
        else {
            if (numSorted == 0) {
                flip(array, (array.length + 1));
                numSorted += 1;
            }
            else {
                flip(array, (array.length - numSorted));
                numSorted += 1;
            }
        }
    }
    return array;
}
