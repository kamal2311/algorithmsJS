function binarySearchRecursive(itemsArraySorted, searchItem) {

    return bSearch(itemsArraySorted, searchItem, 0, itemsArraySorted.length - 1);

    function bSearch(sortedItems, searchItem, start, end) {

        if (start > end) {
            return -1;
        }

        const mid = Math.floor((start + end) / 2);
        const midItem = sortedItems[mid]

        if (midItem < searchItem)
            return bSearch(sortedItems, searchItem, mid + 1, end);
        if (midItem > searchItem) {
            return bSearch(sortedItems, searchItem, start, mid - 1);
        }
        return mid;


    }

}



function binarySearchIterative(intArray, searchItem) {

    let start = 0;
    let end = intArray.length - 1;

    while (start <= end) {

        const mid = Math.floor((start + end) / 2);

        if (intArray[mid] > searchItem) {
            end = mid - 1;
        }
        else if (intArray[mid] < searchItem) {
            start = mid + 1;
        }
        else {
            return mid;
        }

    }

    return -1;

}