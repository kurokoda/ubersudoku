Game = {
    tileValues: undefined,
    selectedTileValue: undefined,
    targetTileID: undefined,
    tiles: [],
    selectorTiles: [],

    show: function () {
        $('#content').append('<div class="game" id = "game"></div>');
        this.init();
        this.createTiles();
        this.createSelectorTiles();
    },

    createTiles: function () {
        var cell_id = 0;
        for (var i = 0; i < 9; i++) {
            var parentRow = "row_" + i;
            $('#game').append('<div id="' + parentRow + '"/>');
            for (var j = 0; j < 9; j++) {
                var value = this.tileValues[cell_id]
                this.tiles.push(new Tile(parentRow, value, cell_id++))
            }
        }
    },

    createSelectorTiles: function () {
        $('#game').append('<div id="tileselector" />');
        for (var k = 1; k <= 9; k++) {
            this.selectorTiles.push(new SelectorTile("#tileselector", k))
        }
    },

    updateSelectors: function (selectorValue) {
        this.selectedTileValue = selectorValue;
        for (var i = 0; i < this.selectorTiles.length; i++) {
            if (this.selectorTiles[i].value == this.selectedTileValue) {
                $(this.selectorTiles[i].element).addClass("active");
            }
            else {
                $(this.selectorTiles[i].element).removeClass("active");
            }
        }
    },

    init: function () {
        this.tileValues = "609238745274561398853947621486352179792614583531879264945723816328196457167485932".split("");
    }
};

