function Tile(parent, value, index) {
    this.parent = "#" + parent;
    this.index = index;
    this.id = 'tile_' + index;
    this.element = '#' + this.id;
    this.value = value;
    this.locked = false;
    this.init(index);
    this.addEventListeners();
    Tile.instances.push(this);
}

Tile.instances = [];

Tile.isLocked = function (target) {
    return Tile.instances[target.getAttribute('data-index')].locked;
};

Tile.prototype.init = function () {
    $(this.parent).append('<div data-index="' + this.index + '" class = "cell" id="' + this.id + '" />');
    if (this.value > 0) {
        this.locked = true;
        $(this.element).text(this.value);
    }
};

Tile.prototype.addEventListeners = function () {
    $(this.element).click(function () {
        if (!Tile.isLocked(this)) {
            var index = this.getAttribute('data-index')
            Game.targetTileID = index;
            Tile.instances[index].locked = true;
            $(this).text(Game.selectedTileValue);
        }
    });

    $(this.element).mouseover(function () {
        if (!Tile.isLocked(this))
            $(this).removeClass('hover-out').addClass('hover-in');
    });

    $(this.element).mouseout(function () {
        if (!Tile.isLocked(this))
            $(this).removeClass('hover-in').addClass('hover-out');
    });
}


