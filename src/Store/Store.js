import { createStore, combineReducers, applyMiddleware} from 'redux';

import Reducer from './Reducer.js';
import thunk from 'redux-thunk';

//storeの生成
const store = createStore(Reducer, applyMiddleware(thunk));

export default store;