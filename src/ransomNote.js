function ransomNote(noteText, magazineText) {

    let noteWords = noteText.split(/\s/);
    let magazineWords = magazineText.split(/\s/);

    let magazineWordCount = {};

    magazineWords.forEach(word => {
        if (!magazineWordCount[word]) {
            magazineWordCount[word] = 0;
        }
        magazineWordCount[word]++;
    });


    return noteWords.every(word => {
        if (magazineWordCount[word] && magazineWordCount[word] > 0) {
            magazineWordCount[word]--;
            return true;
        }
        return false;
    });


}

