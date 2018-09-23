class SymbolTableOrderedArray {

    constructor() {
        this.keys = [];
        this.values = [];
        this.N = 0;
    }

    put(key, value) {

        const rank = this.rank(key);

        if (key === this.keys[rank]) {
            this.values[rank] = value;
            return;
        }


        for (let j = this.N; j > rank; j--) {
            this.keys[j] = this.keys[j - 1];
            this.values[j] = this.values[j - 1];
        }

        this.keys[rank] = key;
        this.values[rank] = value;
        this.N++;
    }

    get(key) {
        const rank = this.rank(key);
        return this.values[rank];
    }

    rank(key) {

        let low = 0, high = this.N - 1;

        while (low <= high) {

            const mid = Math.floor((low + high) / 2);

            if (key > this.keys[mid]) {
                low = mid + 1;
            }
            else if (key < this.keys[mid]) {
                high = mid - 1;
            }
            else {
                return mid;
            }
        }

        return low;

    }



}