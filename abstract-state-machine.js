import {
  STATES,
  STARTING_STATE,
} from './description';

export function StateMachine(description) {
  const machine = {};

  const propsAndMethods = Object.keys(description,);
  for (const prop of propsAndMethods) {
    machine[prop] = description[prop];
  }

  machine[STATES] = description[STATES];
  const actionNames = Object.entries(description[STATES],).reduce((names, [state, stateDescription]) => {
      const actionNamesForState = Object.keys(stateDescription,);
      for (const actionName of actionNamesForState) {
        actionNames.add(actionName);
      }
      return actionNames;
    },);
}
