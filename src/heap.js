class MaxHeap {

    constructor(arr) {

        this.nums = [-1];

        arr.forEach(num => {
            this.insert(num);
        });
    }

    insert(val) {
        this.nums.push(val);
        this.swim(this.size());
    }

    size() {
        return this.nums.length - 1;
    }

    swim(k) {

        while (k > 1 && this.nums[Math.floor(k / 2)] < this.nums[k]) {
            this.swap(k, Math.floor(k / 2));
            k = Math.floor(k / 2);
        }
    }



    swap(i, j) {
        [this.nums[i], this.nums[j]] = [this.nums[j], this.nums[i]];
    }

    show() {
        console.log(this.nums);
    }

    delMax() {

        const max = this.nums[1];
        this.swap(1, this.size());
        this.nums.pop();
        this.sink(1);
        return max;
    }

    sink(k) {

        while (2 * k <= this.size()) {

            let j = 2 * k;

            if (j < this.size() && this.nums[j] < this.nums[j + 1]) {
                j++;
            }

            if (this.nums[k] > this.nums[j]) {
                break;
            }

            this.swap(k, j);
            k = j;
        }
    }

}