import React from "react";
import { connect } from "react-redux";
import addSum from "./sumAction";
import subSum from "./subAction";

class CounterInput extends React.Component {
  render() {
    let input;

    return (
      <div>
        <div>
          <input
            onChange={(event) => (input = parseInt(event.target.value))}
            type={"number"}
          />
          <button onClick={() => this.props.onClick(input, "ADD")}>{"Add"}</button>
        </div>
        <div>
        <input
          onChange={(event) => (input = parseInt(event.target.value))}
          type={"number"}
        />
        <button onClick={() => this.props.onClick(input, "SUB")}>{"Sub"}</button>
      </div>
    </div>
    );
  }
}

// mapDispatchToProps
// dispatch is a function that will emit an action to the store
// notice that it also accepts props (i.e., React Props that you
// would provide to the Component)
let mapDispatchToProps = function (dispatch, props) {
  return {
    onClick: (val, type) => {
      if(type === 'ADD'){
        dispatch(addSum(val));
      }
      if(type === 'SUB'){
        dispatch(subSum(val));
      }
    },
  };
};

// this guy isn't used here, but just reminding you of it's existence!
function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterInput);
