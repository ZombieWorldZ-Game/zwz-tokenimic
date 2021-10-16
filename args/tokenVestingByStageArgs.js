const now = 1633875527 + 10 * 24 * 60 * 60;

module.exports = [
  '0xC10eCBb15611bb68D8cb560a66Ef70D14Ea79A2d', // Token address
  '0x5946868d60558C9099e5dD7E7933f7b46C4D8557',
  [
    now,
    now + 15 * 60, // 15 mins
    now + 2 * 15 * 60, // 30 mins
    now + 3 * 15 * 60, // 45 mins
  ],
  [2500, 5000, 7500, 10000],
];
