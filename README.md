# Battleship
[Wikipedia page](https://en.wikipedia.org/wiki/Battleship_(game))
There are 5 ships:
- Carrier (5)
- Battleship (4)
- Cruiser (3)
- Submarine (3)
- Destroyer (2)

## Approach
I've took some of the new knowledge from TOP's Computer Science chapter and applied it to the project at hand. 
To create the random attacks of the computer player, I've decided to construct a queue after a successful attack.
Going through all the neighboring (legal) cells, the CPU will place the attack according to the first element in the
queue. Right now it will take some time for the CPU to actually destroy the player's ship, but for now that's ok.

Besides that, I've tried to implement the MVC pattern, which to some extend was successful. I definetly have to re-
visit that pattern again, since it's a big concept in regards to several JS frameworks.

## Functionality
The app can create randomly placed ships, or can rotate player selected ships. The AI places attacks randomly, but if it
shoots on target, it will try to attack neighboring cells.
There is some game info displayed in an info box. Players can restart the game (though this feature - besides others - 
needs some refactoring). 

## Testing with JEST
Quick recap: `==` uses type conversion before comparing two values; converts to primitive value.
`===` compares two values of different types; if operands are of different type => false.
The `.toBe` matcher behaves like `===` by utilizing `Object.is(x, y)` which is a slightly different way 
of writing `x === y`.
However, the `.toEqual` matcher does the same equality test, is obviously named after what it's doing,
 but doesn't lead to confusing and unwanted side effects.
`.toEqual` should be the default for comparisons in unit testing.

## MVC Model - View - Controller
The MVC architectual design pattern had it's big moment at the end of this project. 
I figured it would be helpful if the different modules could communicate with each other. That's where
the MVC comes in. 

### General quirks
At some point I've accidentally added a `type: module` property to my `package.json` file.
This caused me a bit of a headache since this lead to Webpack throwing an error. 
Before finding the solution to this problem online, I've changed all my `imports` to
`require` functions. The `require` is a built-in function of NodeJS that takes an external module,
reads the file, executes and returns the export object - pretty much what I think the `import` 
statement does. 
After the above mentioned change, I ran into the problem that upon running `npm run build` I would
receive the response: 'ReferenceError: require is not defined in ES module scope, you can use import instead'. 
To solve this problem, I went to my package.json an looked for a `type` property witch was 
set to `module`. By removing this property and re-running npm, Webpack executed as expected.

### Interesting insights
I had to find a solution to the following problem:
The script renders a 10x10 grid with each cell holding a coordinate. The order of cells was from top left to
bottom right. This was contrary to the way the coordinates are being processed in the script. The desired order
going from bottom left to bottom right has been achieved through the following CSS rules:
```CSS
/* reversing text direction for each board */
#left, #right { 
    height: 100%;
    direction: rtl;
}
/* reversing text direction again for each item of the board */
.gameboard > .cell {
    direction: ltr;
}
/* rotating the board and its cells */
.gameboard, .gameboard > .cell {
    transform: rotate(180deg);
}
```
I've found this solution delightful.