Game = {
    tileValues: undefined,
    selectedTileValue: undefined,
    targetTileID: undefined,
    tiles: [],
    selectorTiles: [],
    difficulty: 1,//difficulty ranges from 1-8. 0 is solved, 9 is completely empty

    show: function () {
        $('#content').append('<div class="game" id = "game">a</div>');
        this.init();
    },

    init: function () {
        var game = $('#game')
        game.empty();
        this.tiles = [];
        this.selectorTiles = [];
        this.tileValues = SolutionGenerator.generate();
        this.createTiles();
        game.append('<p>Use your keyboard to select a value</p>')
        this.createSelectorTiles();
        this.updateSelectors(Math.ceil(Math.random() * 9));
        game.append('<p><div class="button" id="evaluatebutton">Evaluate</div></p>')
        game.append('<p><div class="button" id="newgamebutton">New game</div></p>')
        this.addEventListeners();
    },

    createTiles: function () {
        var cell_id = 0;
        for (var i = 0; i < 9; i++) {
            var parentRow = "row_" + i;
            $('#game').append('<div id="' + parentRow + '"/>');
            for (var j = 0; j < 9; j++) {
                var value = this.tileValues[cell_id];
                new Tile(parentRow, value, cell_id++);
            }
        }
    },

    createSelectorTiles: function () {
        $('#game').append('<div id="tileselector" />');
        for (var k = 1; k <= 9; k++) {
            new SelectorTile("#tileselector", k);

        }
    },

    updateSelectors: function (selectorValue) {
        this.selectedTileValue = selectorValue;
        for (var i = 0; i < SelectorTile.instances.length; i++) {
            if (SelectorTile.instances[i].value == this.selectedTileValue) {
                $(SelectorTile.instances[i].element).addClass("active");
            }
            else {
                $(SelectorTile.instances[i].element).removeClass("active");
            }
        }
    },

    addEventListeners: function () {
        $('#evaluatebutton').click(function () {
            Game.evaluate()
        });
        $('#newgamebutton').click(function () {
            Game.init();
        });
    },

    evaluate: function () {
        Tile.resetAllTiles();
        var hasErrors = false;
        var blockIndices = [0, 3, 6, 27, 30, 33, 57, 60, 63];
        var tiles = undefined
        for (var i = 0, j; i < 9; i++) {
            if (this.tileValues.getSudokuRow(i * 9).containsDuplicateValues()) {
                tiles = Tile.instances.getSudokuRow(i * 9);
                for (j = 0; j < tiles.length; j++) {
                    tiles[j].errorCount++;
                }
                hasErrors = true;
            }
            if (this.tileValues.getSudokuColumn(i).containsDuplicateValues()) {
                tiles = Tile.instances.getSudokuColumn(i);
                for (j = 0; j < tiles.length; j++) {
                    tiles[j].errorCount++;
                }
                hasErrors = true;
            }
            if (this.tileValues.getSudokuBlock(blockIndices[i]).containsDuplicateValues()) {
                tiles = Tile.instances.getSudokuBlock(blockIndices[i]);
                for (j = 0; j < tiles.length; j++) {
                    tiles[j].errorCount++;
                }
                hasErrors = true;
            }
        }
        if (hasErrors) {
            for (var i = 0; i < Tile.instances.length; i++) {
                Tile.instances[i].displayErrorLevel();
            }
        }
        else {
            if (this.tileValues.indexOf(0) > -1) {
                for (var i = 0; i < Tile.instances.length; i++) {
                    Tile.instances[i].displayOK();
                }
            }
            else {
                Application.displayWinningState();
            }
        }
    }
};

