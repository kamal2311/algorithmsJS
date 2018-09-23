describe("Heap", () => {

    it('should construct a heap', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        const heap = new MaxHeap(nums);
        heap.show();

        const max = heap.delMax();
        expect(max).toBe(7);
        heap.show();

        const nextMax = heap.delMax();
        expect(nextMax).toBe(6);
        heap.show();

    });
});