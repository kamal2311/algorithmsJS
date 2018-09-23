class QuickFind {

    constructor(n) {
        this.groups = [];
        for (let i = 0; i < n; i++) {
            this.groups[i] = i;
        }
    }

    areConnected(x, y) {
        return this.groups[x] === this.groups[y];
    }

    connect(x, y) {

        const groupX = this.groups[x];
        const groupY = this.groups[y];

        for (let i = 0; i < this.groups.length; i++) {
            if (this.groups[i] === groupX) {
                this.groups[i] = groupY;
            }
        }
    }

    show() {

        let components = {};

        for (let i = 0; i < this.groups.length; i++) {

            components[this.groups[i]] = components[this.groups[i]] || [];
            components[this.groups[i]].push(i);
        }

        for (const c in components) {
            console.log(c, components[c]);
        }
    }




}