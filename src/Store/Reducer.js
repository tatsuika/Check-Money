import * as Actions from './ActionsType.js';

export const Reducer = (state = {test: 0, current: 0, goal: 0, current: 0, user_datas: [{date:"",income: 0, spends: [],result: 0}]}, action) => {
  //データ読み込み後の処理
  if (action.type === Actions.LOADED_GOAL_DATAS){
    return Object.assign({}, state, {
      goal: action.goal,
      current: action.current
    });
  }
  if (action.type === Actions.LOADED_USER_DATAS){
    action.user_datas.sort((a, b) => {
      let date1 = new Date(a.date);
      let date2 = new Date(b.date);
      return date1 - date2;
    })
    return Object.assign({}, state, {
      user_datas: action.user_datas,
    });
  }
  //目標の変更後の処理
  if (action.type === Actions.LOADED_CHANGE_GOAL){
    return Object.assign({}, state, {
      goal: action.goal
    });
  }
  //収入の追加後の処理
  if (action.type === Actions.LOADED_ADD_INCOME){
    let cp_user_datas = state.user_datas.slice();
    cp_user_datas[state.user_datas.length - 1].income = action.income;
    cp_user_datas[state.user_datas.length - 1].result = action.result;
    return Object.assign({}, state, {
      current: action.current,
      user_datas: cp_user_datas,
    });
  }
  //支出の追加後の処理
  if (action.type === Actions.LOADED_ADD_SPENDS){
    let cp_user_datas = state.user_datas.slice();
    cp_user_datas[state.user_datas.length - 1].spends = action.spends;
    cp_user_datas[state.user_datas.length - 1].result = action.result;
    return Object.assign({}, state, {
      current: action.current,
      user_datas: cp_user_datas,
    });
  }
  //支出の削除後の処理
  if (action.type === Actions.LOADED_DELETE_SPENDS){
    let cp_user_datas = state.user_datas.slice();
    cp_user_datas[state.user_datas.length - 1].spends = action.spends;
    cp_user_datas[state.user_datas.length - 1].result = action.result;
    return Object.assign({}, state, {
      current: action.current,
      user_datas: cp_user_datas,
    });
  }
  return state;
}

export default Reducer;










