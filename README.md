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


## Testing with JEST
Quick recap: `==` uses type conversion before comparing two values; converts to primitive value.
`===` compares two values of different types; if operands are of different type => false.
The `.toBe` matcher behaves like `===` by utilizing `Object.is(x, y)` which is a slightly different way 
of writing `x === y`.
However, the `.toEqual` matcher does the same equality test, is obviously named after what it's doing,
 but doesn't lead to confusing and unwanted side effects.
`.toEqual` should be the default for comparisons in unit testing.

### General quirks
At some point I've accidentally added a `type: module` property to my `package.json` file.
This caused me a bit of a headache since this lead to Webpack throwing an error. I've really
didn't notice that. 
Before finding the solution to this problem online, I've changed all my `imports` to
`require` functions. The `require` is a built-in function of NodeJS that takes an external module,
reads the file, executes and returns the export object - pretty much what I think the `import` 
statement does. 
After the above mentioned change, I ran into the problem that upon running `npm run build` I would
receive the response: 'ReferenceError: require is not defined in ES module scope, you can use import instead'. 
To solve this problem, I went to my package.json an looked for a `type` property witch was 
set to `module`. By removing this property and re-running npm, Webpack executed as expected.

### Resources 
[Paper](https://pageperso.lis-lab.fr/guilherme.fonseca/battleship_conf.pdf) discussing the most efficient algorithms for 
battleship.