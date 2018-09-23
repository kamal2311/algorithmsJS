class QuickUnion {

    constructor(n) {
        this.groups = [...Array(n).keys()];
        console.log(this.groups);
    }

    connect(a, b) {

        const rootA = this.findRoot(a);
        const rootB = this.findRoot(b);

        this.groups[rootA] = rootB;
    }

    areConnected(a, b) {
        const parentA = this.findRoot(a);
        const parentB = this.findRoot(b);

        return parentA === parentB;
    }

    findRoot(x) {

        let currentRoot = x;

        while (currentRoot !== this.groups[currentRoot]) {
            currentRoot = this.groups[currentRoot];
        }

        return currentRoot;

    }

}