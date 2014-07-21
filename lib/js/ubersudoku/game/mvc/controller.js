Controller = {

    init: function () {
        Model.init();
        View.init();
        this.addEventListeners();
        this.updateSelectors(Math.ceil(Math.random() * 9));
    },

    updateSelectors: function (value) {
        Model.selectedTileValue = value;
        View.updateSelectors(value);
    },

    addEventListeners: function () {
        $('#evaluatebutton').click(function () {
            Controller.evaluate()
        });
        $('#newgamebutton').click(function () {
            Controller.init();
        });
    },

    evaluate: function () {
        Model.resetAllTiles();
        var hasErrors = false;
        var blockIndices = [0, 3, 6, 27, 30, 33, 57, 60, 63];
        var tiles = undefined
        for (var i = 0, j; i < 9; i++) {
            if (Model.getSudokuRow('value', i * 9).containsDuplicateValues()) {
                tiles = Model.getSudokuRow('tile', i * 9);
                for (j = 0; j < tiles.length; j++) {
                    tiles[j].errorCount++;
                }
                hasErrors = true;
            }
            if (Model.getSudokuColumn('value', i).containsDuplicateValues()) {
                tiles = Model.getSudokuColumn('tile', i);
                for (j = 0; j < tiles.length; j++) {
                    tiles[j].errorCount++;
                }
                hasErrors = true;
            }
            if (Model.getSudokuBlock('value', blockIndices[i]).containsDuplicateValues()) {
                tiles = Model.getSudokuBlock('tile', blockIndices[i]);
                for (j = 0; j < tiles.length; j++) {
                    tiles[j].errorCount++;
                }
                hasErrors = true;
            }
        }
        if (hasErrors == true) {
            for (var i = 0; i < Model.tiles.length; i++) {
                Model.tiles[i].displayErrorLevel();
            }
        }
        else {
            if (Model.tileValues.indexOf(0) > -1) {
                for (var i = 0; i < Model.tiles.length; i++) {
                    Model.tiles[i].displayOK();
                }
            }
            else {
                View.showResults();
            }
        }
    }
};

