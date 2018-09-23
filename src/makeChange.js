function makeChange(coins, amount) {


    let changeCache = initCache(amount);

    return makeChangeCached(coins, amount, changeCache);

}

function initCache(amount) {
    const changeCache = new Array(amount + 1);
    changeCache.fill(-1);
    changeCache[0] = 0;
    return changeCache;
}

function makeChangeCached(coins, amount, changeCache) {


    if (changeCache[amount] !== -1) {
        return changeCache[amount];
    }

    let minAnswer = Number.MAX_VALUE;

    for (const coin of coins) {

        if (coin <= amount) {

            const minCoins = makeChangeCached(coins, amount - coin, changeCache);

            if (minCoins < minAnswer) {
                minAnswer = minCoins;
            }
        }

    }

    changeCache[amount] = minAnswer + 1;
    return changeCache[amount];
}