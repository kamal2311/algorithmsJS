class Node {
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class SymbolTable {

    constructor() {
        this.start = undefined;
        this.length = 0;
    }

    put(key, value) {

        for (let n = this.start; n !== undefined; n = n.next) {
            if (key === n.key) {
                n.value = value;
                return;
            }
        }

        this.start = new Node(key, value, this.start);
        this.length++;
    }

    get(key) {
        for (let n = this.start; n !== undefined; n = n.next) {
            if (key === n.key) {
                return n.value;
            }
        }

        return null;
    }

    delete(key) {

        let previous = undefined;
        let current = this.start;

        while (current !== undefined) {

            if (key === current.key) {
                previous.next = current.next;
                this.length--;
                return current.value;
            }
            previous = current;
            current = current.next
        }
    }

    size() {
        return this.length;
    }

    keys() {
        const keys = [];
        for (let curr = this.start; curr !== undefined; curr = curr.next) {
            keys.push(curr.key);
        }
        return keys;
    }

}