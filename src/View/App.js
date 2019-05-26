import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDatas } from '../Store/ActionsCreater.js';

class App extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.loadDatas();
  }

  render(){
    const {test} = this.props
    console.log(test)
    return (
      <div className="App">
      </div>
    );
  }
}


export default connect(
    state => ({ test: state.test, }),
    { loadDatas }
)(App)
