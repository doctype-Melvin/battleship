const player = require('./player');
const viewer = require('./displayController');
// MVC Controller
const game = ((model, view) => {
  const init = (() => {
    const human = model('human');
    const roboto = model('roboto');
    const display = view;
    human.opp = roboto;
    roboto.opp = human;
    display.placePhase(display, human, roboto);

    return {
      human,
      roboto,
      display,
    };
  })(model, view);
  init.display.restartBtn.addEventListener('click', () => location.reload());
})(player, viewer);

module.exports = game;
