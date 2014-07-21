Model = {
    /*
     Save these for board generation

     solutions: new Array(81),
     attempts: new Array(81),
     */

    selectedTileValue: undefined,
    tileValues: [],
    tiles: [],
    index: 0,
    difficulty: 2,//difficulty ranges from 1-8. 0 is solved, 9 is completely empty


    init: function () {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var result;
                if (Math.round(Math.random() * this.difficulty) == 0)
                    result = (i * 3 + Math.floor(i / 3) + j) % 9 + 1;
                else
                    result = 0;
                this.tileValues[i * 9 + j] = result;
            }
        }

    },

    getDataList: function (type) {
        if (type == 'value')
            return this.tileValues;
        else if (type == 'tile')
            return this.tiles;
        else {
            throw("incorrect data type");
        }
    },

    getSudokuRow: function (type, index) {
        var arr = this.getDataList(type);
        var row = 9 * (index / 9 | 0);
        var result = arr.slice(row, row + 9);
        return result;
    },

    getSudokuColumn: function (type, index) {
        var arr = this.getDataList(type);
        var result = [];
        for (var i = 0; i < 9; i++) {
            result.push(arr[index % 9 + (9 * i)]);
        }
        return result;
    },

    getSudokuBlock: function (type, index) {
        var arr = this.getDataList(type);
        var horizontalPos = index % 9 / 3 | 0;
        var verticalPos = index / 9 / 3 | 0;
        var result = [];
        var base = 3 * horizontalPos + 27 * verticalPos;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var head = base + j + (i * 9);
                result.push(arr[head])
            }
        }
        return result;
    },

    isLocked: function (target) {
        return Model.tiles[target.getAttribute('data-index')].locked;
    },

    resetAllTiles: function () {
        for (var i = 0; i < Model.tiles.length; i++) {
            Model.tiles[i].resetErrorLevel();
        }
    },

    getOffsetTileIndices: function () {
        var result = [];
        var bases = [3, 27, 33, 57];
        for (var k = 0; k < bases.length; k++) {
            var base = bases[k];
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    var head = base + j + (i * 9);
                    result.push(head)
                }
            }
        }
        return result;
    }

    /*

     Save these for board generation

     isViable: function (candidate) {
     if (this.solutions.getSudokuRow(this.index).indexOf(candidate) > -1) {
     return false;
     }
     if (this.solutions.getSudokuColumn(this.index).indexOf(candidate) > -1) {
     return false;
     }
     return true;
     },

     getCandidates: function () {
     return $([1, 2, 3, 4, 5, 6, 7, 8, 9]).not(this.attempts[this.index]).get();
     }
     */
};
