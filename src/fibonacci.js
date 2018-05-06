function fibRecursive(n) {
    if (n <= 2) {
        return 1;
    }

    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibIterative(n) {

    let i = 1, j = 1, k = 3;

    if (n < k) {
        return 1;
    }

    while (k <= n) {

        sum = i + j;
        i = j;
        j = sum;

        k++;
    }

    return sum;

}