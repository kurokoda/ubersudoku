function Tile(parent, value, index) {
    this.parent = "#" + parent;
    this.index = index;
    this.id = 'tile_' + index;
    this.element = '#' + this.id;
    this.value = value;
    this.locked = false;
    this.init(index);
    this.addEventListeners();
}

Tile.prototype.init = function () {
    $(this.parent).append('<div data-index="' + this.index + '" class = "cell" id="' + this.id + '" />');
    if (this.value > 0) {
        this.locked = true;
        $(this.element).text(this.value);
    }
};

Tile.prototype.addEventListeners = function () {
    $(this.element).click(function () {
        Game.targetTileID = this.getAttribute('data-index');
        console.log(Game.targetTileID);
    });

    $(this.element).mouseover(function () {
        if (!Game.tiles[this.getAttribute('data-index')].locked)
            $(this).removeClass('hover-out').addClass('hover-in');
    });

    $(this.element).mouseout(function () {
        if (!Game.tiles[this.getAttribute('data-index')].locked)
            $(this).removeClass('hover-in').addClass('hover-out');
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
        Game.updateSelectors(delegate.value);
    });
};