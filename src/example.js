// Fixed linting violations
const used = 'test';

function good() {
  let x = 1;
  let y = 'single quotes';
  return x + y + used;
}

module.exports = { good };