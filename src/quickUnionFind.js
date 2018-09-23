class QuickUnionFind {

    constructor(n) {
        this.groups = [...Array(n).keys()];
        this.sizes = new Array(n);
        this.sizes.fill(1);
    }

    connect(a, b) {
        const rootA = this.findRoot(a);
        const rootB = this.findRoot(b);

        if (this.sizes[rootA] > this.sizes[rootB]) {
            this.groups[rootB] = rootA;
            this.sizes[rootA] += this.sizes[rootB];
        }

        else {
            this.groups[rootA] = rootB;
            this.sizes[rootB] += this.sizes[rootA];
        }
    }

    areConnected(a, b) {
        const rootA = this.findRoot(a);
        const rootB = this.findRoot(b);

        return rootA === rootB;
    }

    findRoot(x) {
        while (x !== this.groups[x]) {
            x = this.groups[x];
        }

        return x;
    }

}