import React, {Component} from 'react';
import {connect} from 'react-redux';
import {test} from '../actions/actionTest';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Starter from '../screens/Starter';

class StarterComponent extends Component {
  componentDidMount() {
    this.props.test(null);
  }

  render() {
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
  return {test: state.testReducer}
}

export default connect(null, {test})(StarterComponent);
