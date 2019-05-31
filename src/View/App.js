import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { loadDatas, loadChangeGoal, loadAddIncome, loadAddSpends, loadDeleteSpends} from '../Store/ActionsCreater.js';

import Home from './Containers/Home.js'


class App extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.loadDatas();
  }

  render(){
    const {test, current, goal, user_datas} = this.props
    const today_data = user_datas[user_datas.length - 1];
    return (
      <div className="App">
        <Home
          user_datas={user_datas}
          current={current}
          goal={goal}
          submitGoal={(num) => this.props.loadChangeGoal(num)}
          submitIncome={(num) => this.props.loadAddIncome(num, current, today_data.income, today_data.result)}
          submitSpend={(value) => this.props.loadAddSpends(value, current, today_data.spends, today_data.result)}
          deleteSpends={(index) => this.props.loadDeleteSpends(index, current, today_data.spends, today_data.result)}
        />
      </div>
    );
  }
}


export default connect(
    state => ({ test: state.test, current: state.current, goal: state.goal, user_datas: state.user_datas}),
    { loadDatas, loadChangeGoal, loadAddIncome, loadAddSpends, loadDeleteSpends}
)(App)
