import * as Firebase from '../set_firebase.js'
import * as ActionsType from './ActionsType.js'

export const loadedDatas = (data) =>{
  return {
    type: ActionsType.LOADED_DATAS,
    data: data
  }
}

export const loadDatas = () => {
  return (dispatch) => {
    let load = async () => {
      let first_scene_list = [];
      await Firebase.DB.collection("test").get().then((response) => {
        response.forEach((doc) => {
        const document = doc.data();
        first_scene_list.push(document.tast_text);
      })});
      dispatch(loadedDatas(first_scene_list));
    }
    load();
  }
}

