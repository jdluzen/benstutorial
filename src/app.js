function InputReader() {
    this.readInput = function () {
        return $("#name").val();
    }
}

// Export node module.
if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
    module.exports = InputReader;
}