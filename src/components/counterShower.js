import React from "react";
import { connect } from "react-redux";
import addSum from "./sumAction";

class CounterShower extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.total}</h1>
      </div>
    );
  }
}

let mapDispatchToProps = function (dispatch, props) {
  return {};
};

// this guy isn't used here, but it's needed as the first argument in connect
// I guess you could also pass undefined...
function mapStateToProps(state, props) {
  return {
    total: state.sum,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterShower);
