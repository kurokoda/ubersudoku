ubersudoku
==========

A sleeker, blacker sudoku experience

Design
==========

From the beginning, I wanted to brand the application to resemble Uber's site as closely as possible. While the images are taken from the the Uber site, none of the CSS was 'liberated' from Uber. The CSS was entirely handrolled. The slideshow functionality is also built from scratch, and is deceptively simple.

UI/UX
==========

My favorite feature is the 'heatmapping' of errors. If a tile is in a row, column, or a block which contains errors, it's css class reflects the number of errors it is related to.
Additionally, the keyboard mapping of tile values makes me pretty happy.

Structure
==========

Ubersudoku was written using OO principles, seperating the various responsibilities of the app into discrete files:

1. Application: Document methods and general functionality

2. Game: Game logic and display
    * Tile: The board tiles
    * SelectorTiles: The selector UI of the game

3. Solution generator: The provider of the sudoku board data

4. Slideshow: The animation of the hero text and background images

5. Util: The array extension methods that allow parsing of the sudoku data into rows, columns, and blocks

The only library used in this app was JQuery. Originally, I intended to use JQuery-UI for it's drag-and-drop functionality, but rethought the UI. In the end, I decided against drag-and-drop, and the library was unused. Additionally, I incorporated normalize.css 


