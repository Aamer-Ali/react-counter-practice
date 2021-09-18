import React, { Component } from "react";
import Counter from "../components/counter";

class Counters extends React.Component {
  render() {
    //object desctructuring.
    //Instead of using this.props.(...) We just destructure and get separate properties from this.props
    const { onReset, counters, onDelete, onIncrement, onDecrement} = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-danger m2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
