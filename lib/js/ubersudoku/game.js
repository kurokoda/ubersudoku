Game = {
    tileValues: undefined,
    selectedTileValue: undefined,
    targetTileID: undefined,
    tiles: [],
    selectorTiles: [],

    show: function () {
        $('#content').append('<div class="board" id = "board"></div>');

        this.init();

        var cell_id = 0;
        var parentRow = undefined;

        for (var i = 0; i < 9; i++) {
            parentRow = "row_" + i
            $('#board').append('<div id="' + parentRow + '"/>');
            for (var j = 0; j < 9; j++) {
                this.tiles.push(new Tile(parentRow, cell_id++))
            }
        }
        $('#board').append('<div id="tileselector" />');
        for (var k = 1; k <= 9; k++) {
            this.selectorTiles.push(new SelectorTile("#tileselector", k))
        }
    },
    init: function () {
        this.tileValues = "609238745274561398853947621486352179792614583531879264945723816328196457167485932".split("");
    }
};

