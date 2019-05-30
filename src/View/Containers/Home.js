import React, { Component } from 'react';

import MenuBar from '../Components/MenuBar.js'
import GoalPaper from '../Components/GoalPaper.js'
import TodayPaper from '../Components/TodayPaper.js'
import HistoryPaper from '../Components/HistoryPaper.js'
import ChangeGoalValue from '../Components/ChangeGoalValue.js'
import AddSpend from '../Components/AddSpend.js'
import AddIncome from '../Components/AddIncome.js'
import DisplayData from '../Components/DisplayData.js'




class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      edit_modal_open: false,
      add_income_open: false,
      add_spend_open: false,
      display_data_open: false,
      dialog_target: -1,
    }
  }
  handleModalOpen(x) {
    switch (x){
      case 0:
        this.setState({
          edit_modal_open: true,
          dialog_target: 0,
        });
        break;
      case 1:
        this.setState({
          add_income_open: true,
          dialog_target: 1,
        });
        break;
      case 2:
        this.setState({
          add_spend_open: true,
          dialog_target: 2,
        });
        break;
      default:
         this.setState({
           display_data_open: true,
           dialog_target: x,
         });
        break;
    }
  }
  handleModalClose() {
    switch (this.state.dialog_target){
      case 0:
        this.setState({
          edit_modal_open: false,
          dialog_target: -1,
        });
        break;
      case 1:
        this.setState({
          add_income_open: false,
          dialog_target: -1,
        });
        break;
      case 2:
        this.setState({
          add_spend_open: false,
          dialog_target: -1,
        });
        break;
      default:
        this.setState({
          display_data_open: false,
          dialog_target: -1,
        });
        break;
    }
  }
  render(){
    return (
      <div className="Home">
        <MenuBar />
        <GoalPaper
         openModal={(s) =>{this.handleModalOpen(s)}}
         goal={this.props.goal}
         current={this.props.current} />
        <TodayPaper
          openModal={(s) =>{this.handleModalOpen(s)}}
          today_data={this.props.user_datas[this.props.user_datas.length - 1]} />
        <HistoryPaper
          openModal={(s) =>{this.handleModalOpen(s)}}
          user_datas={this.props.user_datas}/>
        <ChangeGoalValue
         modal_open={this.state.edit_modal_open}
         modal_title={this.state.modal_title}
         modalClose={() => {this.handleModalClose()}}
         submitGoal={(num) => {this.props.submitGoal(num)}}/>
        <AddIncome
         modal_open={this.state.add_income_open}
         modalClose={() => {this.handleModalClose()}}
         submitIncome={(num) => {this.props.submitIncome(num)}} />
        <AddSpend
          modal_open={this.state.add_spend_open}
          modalClose={() => {this.handleModalClose()}}
          submitSpend={(value) => {this.props.submitSpend(value)}}  />
        <DisplayData
          user_datas={this.props.user_datas}
          modal_open={this.state.display_data_open}
          dialog_target={this.state.dialog_target}
          modalClose={() => {this.handleModalClose()}} />
      </div>
    );
  }
}


export default Home;