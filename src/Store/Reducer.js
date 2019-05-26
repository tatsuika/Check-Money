import * as Actions from './ActionsType.js';

export const Reducer = (state = {test: 0,}, action) => {
  if (action.type === Actions.LOADED_DATAS){
    return Object.assign({}, state, {
      test: action.data,
    });
  }
  return state;
}

export default Reducer;