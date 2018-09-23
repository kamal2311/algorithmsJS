class MaxHeap {

    constructor(arr) {

        this.nums = [-1];

        arr.forEach(num => {
            this.insert(num);
        });
    }

    insert(val) {
        this.nums.push(val);
        this.size = this.nums.length - 1;
        this.swim(this.size);
    }

    swim(k) {

        let current = k;
        while (Math.floor(current / 2) >= 1 && this.nums[Math.floor(current / 2)] < this.nums[current]) {
            this.swap(current, Math.floor(current / 2));
            current = Math.floor(current / 2);
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
        this.swap(1, this.size);
        this.nums.pop();
        this.size--;
        this.sink(1);
        return max;
    }

    sink(k) {

        const leftChildIndex = 2 * k;
        const rightChildIndex = 2 * k + 1;


        if (this.nums[leftChildIndex] === undefined) {
            return;
        }

        if (this.nums[rightChildIndex] === undefined) {

            if (this.nums[k] > this.nums[leftChildIndex]) {
                return;
            }

            else {
                this.swap(k, leftChildIndex);
                this.sink(leftChildIndex);
            }

        }

        else {

            if (this.nums[k] > this.nums[leftChildIndex] && this.nums[k] > this.nums[rightChildIndex]) {
                return;
            }

            else {

                const toSwap = this.nums[leftChildIndex] > this.nums[rightChildIndex] ? leftChildIndex : rightChildIndex;
                this.swap(k, toSwap);
                this.sink(toSwap);
            }
        }

    }

}