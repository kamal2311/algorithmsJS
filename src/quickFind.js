class QuickFind {

    constructor(n) {
        this.items = [];
        for (let i = 0; i < n; i++) {
            this.items.push(i);
        }
    }

    areConnected(x, y) {
        return this.items[x] === this.items[y];
    }

    connect(x, y) {

        const idX = this.items[x];
        const idY = this.items[y];

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === idX) {
                this.items[i] = idY;
            }
        }
    }

    show() {

        let components = {};

        for (let i = 0; i < this.items.length; i++) {
            if (!(this.items[i] in components)) {
                components[this.items[i]] = [];
            }
            components[this.items[i]].push(i);
        }

        for (const c in components) {
            console.log(c, components[c]);
        }
    }




}