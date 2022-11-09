# Battleship
[Wikipedia page](https://en.wikipedia.org/wiki/Battleship_(game))

## Testing with JEST
Quick recap: `==` uses type conversion before comparing two values; converts to primitive value.
`===` compares two values of different types; if operands are of different type => false.
The `.toBe` matcher behaves like `===` by utilizing `Object.is(x, y)` which is a slightly different way 
of writing `x === y`.
However, the `.toEqual` matcher does the same equality test, is obviously named after what it's doing,
 but doesn't lead to confusing and unwanted side effects.
`.toEqual` should be the default for comparisons in unit testing.

### Resources 
[Paper](https://pageperso.lis-lab.fr/guilherme.fonseca/battleship_conf.pdf) discussing the most efficient algorithms for 
battleship.