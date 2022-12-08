// FIBONACCI SERIES:-
// EXPECTED OUTPUT: [0, 1, 1, 2, 3, 5, 8, 13, ..... 856888];

let n1 = 0, n2 = 1, nextTerm;
nextTerm = 0;
while (nextTerm <= 13) {
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}