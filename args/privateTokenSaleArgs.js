const now = 1633875527 + 10 * 24 * 60 * 60;

module.exports = [
  '0xC10eCBb15611bb68D8cb560a66Ef70D14Ea79A2d', // Token address
  1000, // perent for after release (10%)
  now + 600,
  60, // 1 minute cliff
  10, // 10 period
  60 * 10, // 10 minutes for each period
];
