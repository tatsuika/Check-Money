import * as Firebase from '../set_firebase.js'
import * as ActionsType from './ActionsType.js'

const today = new Date();
const today_s = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`


//データの初期化
export const loadDatas = () => {
  return (dispatch) => {
    let load = async () => {
      let user_goal = [];
      let user_data = [];
      await Firebase.DB.collection("UserState").get().then((response) => {
        response.forEach((doc) => {
        const document = doc.data();
        user_goal.push(document);
      })});
      await Firebase.DB.collection("UserData").get().then((response) => {
        response.forEach((doc) => {
        const document = doc.data();
        user_data.push(document);
      })});
      let check = await Firebase.DB.collection("UserData").doc(today_s).get().then((response) => {
        return (typeof response.data()  === 'undefined');
      });
      if(check){
        let new_data = {
          date: today_s.replace(/-/g, "/"),
          income: 0,
          spends: [],
          result: 0
        };
        await Firebase.DB.collection("UserData").doc(today_s).set(new_data);
        user_data.push(new_data);
      }
      dispatch(loadedGoalDatas(user_goal));
      dispatch(loadedUserDatas(user_data));
    }
    load();
  }
}
//データの初期化後の処理
export const loadedGoalDatas = (data) =>{
  let goal = data[0].goal;
  let current = data[0].current;
  console.log(goal);
  return {
    type: ActionsType.LOADED_GOAL_DATAS,
    goal: goal,
    current: current
  }
}
export const loadedUserDatas = (data) =>{
  let user_datas = [];
  data.forEach((value) => {
    user_datas.push(value);
  });
  return {
    type: ActionsType.LOADED_USER_DATAS,
    user_datas: user_datas
  }
}


//貯金目標の更新
export const loadChangeGoal = (num) =>{
  return (dispatch) => {
    let addload = async () => {
      await Firebase.DB.collection("UserState").doc("j8bFzxsS7VMU7nb9dC7s").update({
　　　　　goal: num,
      });
      dispatch(loadedChangeGoal(num));
    }
    addload();
  }
}
//貯金目標の更新後の処理
export const loadedChangeGoal = (num) =>{
  return {
    type: ActionsType.LOADED_CHANGE_GOAL,
    goal: num,
  }
}


//収入の追加
export const loadAddIncome = (num, current, income, result) =>{
  return (dispatch) => {
    let addIncome = async () => {
      await Firebase.DB.collection("UserState").doc("j8bFzxsS7VMU7nb9dC7s").update({
　　　　　current: current + num,
      });
      await Firebase.DB.collection("UserData").doc(today_s).update({
        income: income + num,
        result: result + num,
      });
      dispatch(loadedAddIncome(current + num, income + num, result + num));
    }
    addIncome();
  }
}
//収入の追加後の処理
export const loadedAddIncome = (num, income, result) =>{
  return {
    type: ActionsType.LOADED_ADD_INCOME,
    current: num,
    income: income,
    result: result,
  }
}


//支出の追加
export const loadAddSpends = (value, current, spends, result) =>{
  return (dispatch) => {
    let addSpend = async () => {
      await Firebase.DB.collection("UserState").doc("j8bFzxsS7VMU7nb9dC7s").update({
　　　　　current: current - value.sum,
      });
      await Firebase.DB.collection("UserData").doc(today_s).update({
        spends: spends.concat([value.title, value.tag, value.sum]),
        result: result - value.sum,
      });
      dispatch(loadedAddSpends(current - value.sum, spends.concat([value.title, value.tag, value.sum]), result - value.sum));
    }
    addSpend();
  }
}
//支出の追加後の処理
export const loadedAddSpends = (num, spends, result) =>{
  return {
    type: ActionsType.LOADED_ADD_SPENDS,
    current: num,
    spends: spends,
    result: result,
  }
}

//支出の削除
export const loadDeleteSpends = (index, current, spends, result) =>{
  return (dispatch) => {
    console.log(index);
    console.log(spends[(index - 1)*3 + 2]);
    let deleteSpends = async () => {
      await Firebase.DB.collection("UserState").doc("j8bFzxsS7VMU7nb9dC7s").update({
　　　　　current: current + spends[(index - 1)*3 + 2],
      });
      await Firebase.DB.collection("UserData").doc(today_s).update({
        spends: spends.slice().splice((index - 1)*3 + 3, 3),
        result: result + spends[(index - 1)*3 + 2],
      });
      console.log(spends.slice().splice((index - 1)*3 + 3, 3));
      dispatch(loadedDeleteSpends(current + spends[(index - 1)*3 + 2], spends.slice().splice((index - 1)*3 + 3, 3), result + spends[(index - 1)*3 + 2]));
    }
    deleteSpends();
  }
}
//支出の追加後の処理
export const loadedDeleteSpends = (num, spends, result) =>{
  return {
    type: ActionsType.LOADED_DELETE_SPENDS,
    current: num,
    spends: spends,
    result: result,
  }
}



















/*
//今日のデータの更新
export const loadChangeToday = (num, date, list = []) =>{
  return (dispatch) => {
    let addload = async () => {
      let check = await Firebase.DB.collection("UserData").doc(date).get().then((response) => {
        return (typeof response.data()  === 'undefined')
      });;
      if(check){
        await Actions.DB.collection("UserData").doc(date).add({
          date: date.replace("-", "/"),
          income: num,
          spends: {list}
        })
        let data = {
          date: date.replace("-", "/"),
          income: num,
          spends: {list}
        }
      }else{

      }
      dispatch(loadedChangeToday(data));
    }
      await Firebase.DB.collection("UserState").doc("j8bFzxsS7VMU7nb9dC7s").update({
　　　　　goal: num,
      });
      dispatch(loadedChangeGoal(num));
    }
    addload();
  }
}
//貯金目標の更新後の処理
export const loadedChangeToday = (data) =>{
  return {
    type: ActionsType.loadChangeToday,
    data: data,
  }
}
*/


























