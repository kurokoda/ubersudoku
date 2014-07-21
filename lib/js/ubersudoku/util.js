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



