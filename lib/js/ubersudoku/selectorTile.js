function SelectorTile(parent, value) {
    this.parent = parent;
    this.id = 'selector-tile_' + value;
    this.element = '#' + this.id;
    this.value = value;
    this.init();
    this.addEventListeners();
    SelectorTile.instances.push(this);
}

SelectorTile.instances = [];

SelectorTile.prototype.init = function () {
    $(this.parent).append('<div class = "cell selector" id="' + this.id + '">' + this.value + '</div>');
};

SelectorTile.prototype.addEventListeners = function () {
    var delegate = this;
    $(this.element).click(function () {
        Game.updateSelectors(delegate.value);
    });
};
