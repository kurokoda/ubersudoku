function Tile(parent, value, index) {
    this.parent = "#" + parent;
    this.id = 'tile_' + index;
    this.element = '#' + this.id;
    this.value = value;
    this.init();
    this.addEventListeners();
}

Tile.prototype.init = function () {
    $(this.parent).append('<div class = "cell" id="' + this.id + '" />');
    if (this.value > -1) {
        $(this.element).text(this.value);
    }
};

Tile.prototype.addEventListeners = function () {
    $(this.element).click(function () {
        Game.targetTileID = this.id.split("_")[1];
        console.log(Game.targetTileID);
    });
}

function SelectorTile(parent, value) {
    this.parent = parent;
    this.id = 'selector-tile_' + value;
    this.element = '#' + this.id;
    this.value = value;
    this.init();
    this.addEventListeners();
}

SelectorTile.prototype.init = function () {
    $(this.parent).append('<div class = "cell selector" id="' + this.id + '">' + this.value + '</div>');
};

SelectorTile.prototype.addEventListeners = function () {
    var delegate = this;
    $(this.element).click(function () {

        Game.updateSelectors(delegate.value)
    });
};