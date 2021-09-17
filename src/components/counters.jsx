import React, { Component } from "react";
import Counter from "../components/counter";

class Counters extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-danger m2">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
