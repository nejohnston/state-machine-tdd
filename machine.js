// @flow

const VendingMachine = {
  power: false,
  items: new Map([
    [('Four lokos', { stock: 0, price: 1 })],
    [("Reese's pieces", { stock: 0, price: 1 })],
  ]),
  change: new Map([
    [1, 'Loonie'],
    [2, 'Toonie'],
    [0.25, 'Quarter'],
    [0.1, 'Dime'],
    [0.05, 'Nickel'],
  ]),
  states: {
    poweredOff: {},
    itemsEmpty: {},
    changeEmpty: {},
  },
};