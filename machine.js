// @flow

const VendingMachine = {
  items: new Map([
    [('Four lokos', { stock: 0, price: 1 })],
    [("Reese's pieces", { stock: 0, price: 1 })],
  ]),
  change: new Map([
    ['Twoonie', { stock: 0, value: 2 }],
    ['Loonie', { stock: 0, value: 1 }],
    ['Quarter', { stock: 0, value: 0.25 }],
    ['Dime', { stock: 0, value: 0.1 }],
    ['Nickel', { stock: 0, value: 0.05 }],
  ]),
  states: {
    maintenance: {
      exitMaintenanceMode: () => {},
      powerOff: () => {},
      restockChange: () => {},
      restockItems: () => {},
    },
    readyToVend: {
      selectItem: () => {},
      enterMaintenanceMode: () => {},
      powerOff: () => {},
    },
    acceptingCoins: {
      addCoin: () => {},
      returnCoins: () => {},
    },
    ready: {
      selectItem: () => {},
      dispenseItem: () => {},
      powerOff: () => {},
    },
    poweredOff: {
      powerOn: () => {},
    },
    itemsEmpty: {
      powerOff: () => {},
      restockItems: () => {},
    },
    changeEmpty: {
      powerOff: () => {},
      restockChange: () => {},
    },
    dispensingItem: { updateItemStock: () => {} },
    dispensingChange: {
      powerOff: () => {},
    },
  },
};
