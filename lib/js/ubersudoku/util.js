Array.prototype.getSudokuRow = function (index) {
    var row = index / 9 | 0;
    return this.slice(row * 9, (row * 9) + 9);
};

Array.prototype.getSudokuColumn = function (index) {
    var result = [];
    for (var i = 0; i < 9; i++) {
        result.push(this[index % 9 + (9 * i)]);
    }
    return result
};

Array.prototype.getSudokuBlock = function (index) {
    var horizontalPos = index % 9 / 3 | 0;
    var verticalPos = index / 9 / 3 | 0;
    var result = [];
    var base = 3 * horizontalPos + 27 * verticalPos;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var head = base + j + (i * 9);
            result.push(this[head])
        }
    }
    return result;
};

Array.prototype.containsDuplicateValues = function () {
    var map = {};
    for (var i = 0, size = this.length; i < size; i++) {
        if (this[i]) {
            if (map[this[i]]) {
                return true;
            }
            map[this[i]] = true;
        }
    }
    return false;
}



