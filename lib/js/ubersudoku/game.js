Game = {
    tileValues: undefined,
    selectedTileValue: undefined,
    targetTileID: undefined,
    tiles: [],
    selectorTiles: [],
    difficulty: 5,//difficulty ranges from 1-8. 0 is solved, 9 is completely empty

    show: function () {
        $('#content').append('<div class="game" id = "game"></div>');
        this.init();
    },

    init: function () {
        $('#game').empty();
        this.tiles = [];
        this.selectorTiles = [];
        this.tileValues = SolutionGenerator.generate();//"609238745274561398853947621486352179792614583531879264945723816328196457167485932".split("");
        this.createTiles();
        this.createSelectorTiles();
        this.updateSelectors(Math.ceil(Math.random() * 9));
        $('#game').append('<p><div class="button" id="evaluatebutton">Evaluate</div></p>')
        $('#game').append('<p><div class="button" id="newgamebutton">New game</div></p>')
        this.addEventListeners();
    },

    createTiles: function () {
        var cell_id = 0;
        for (var i = 0; i < 9; i++) {
            var parentRow = "row_" + i;
            $('#game').append('<div id="' + parentRow + '"/>');
            for (var j = 0; j < 9; j++) {
                var value = this.tileValues[cell_id]
                new Tile(parentRow, value, cell_id++)
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
        var rowContainsDupes = this.tileValues.getSudokuRow(1).containsDuplicateValues()
        if (rowContainsDupes) {
            console.log("Row contains dupes")
        }
        else {
            console.log("Row doesn't contain dupes")
        }
    }
};

