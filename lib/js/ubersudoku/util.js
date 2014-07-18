Array.prototype.getSudokuRow = function (index) {
    var rowStartIndex = 9 * (Math.floor((index + 9) / 9));
    return this.slice(0, 9);
}

Array.prototype.getSudokuColumn = function (index) {
    //stub
}

Array.prototype.getSudokuBlock = function (index) {

}
