function fibRecursive(n) {

    if (!Number.isInteger(n) || n < 0) {
        throw new Error('InvalidInput');
    }

    if (n <= 2) {
        return 1;
    }

    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibIterative(n) {

    if (!Number.isInteger(n) || n < 0) {
        throw new Error('InvalidInput');
    }

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