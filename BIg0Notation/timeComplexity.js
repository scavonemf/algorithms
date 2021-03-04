//TIME COMPLEXITY

// O(n) n operations (linear)

function addUpTo1(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(6))

//O(1) always 3 operations (constant)

function addUpTo2(n) {
    return n * (n + 1) / 2
}

console.log(addUpTo(6))

//O(n2) because is a 0(n) inside of a 0(n) operation (quadratic)

function printAllPairs(n) {
    for (var i = 0; i < n; i++) { //O(n) linear
        for (var j = 0; j < n; j++) { //O(n) linear
            console.log(i, j)
        }
    }
}

printAllPairs(4)

//O(n) linear

function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}

//O(1) constant

function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}


