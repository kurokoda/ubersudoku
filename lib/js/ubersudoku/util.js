Array.prototype.getSudokuRow = function (index) {
    var row = 9 * (index / 9 | 0);
    var result = this.slice(row, row + 9);
    return result;
};

Array.prototype.getSudokuColumn = function (index) {
    var result = [];
    for (var i = 0; i < 9; i++) {
        result.push(this[index % 9 + (9 * i)]);
    }
    return result;
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
        var value = this[i];
        if (value != 0) {
            if (map[value]) {
                return true;
            }
            map[value] = true;
        }
    }
    return false;
}



