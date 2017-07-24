import React, {Component} from 'react';
import {connect} from 'react-redux';
import {test} from '../actions/actionTest';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Starter from '../screens/Starter';

class MainComponent extends Component {
  componentDidMount() {
    this.props.test({test: 'Some value'});
  }

  render() {
    console.log(this.props.testValue);
    
    return (
      <div>
        <Router>
          <Switch>
            <Route exact={true} path='/' component={Starter}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {testValue: state.testReducer}
}

export default connect(mapStateToProps, {test})(MainComponent);
