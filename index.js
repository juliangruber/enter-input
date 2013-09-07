
/**
 * Expose `Input`.
 */

module.exports = Input;

/**
 * Enter input.
 *
 * @param {Function} fn
 */

function Input(fn) {
  var input = document.createElement('input');
  input.addEventListener('keydown', function(ev) {
    if (ev.keyCode == 13) return fn.call(input, ev);
  });
  return input;
}

