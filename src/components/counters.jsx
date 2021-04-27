import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //   constructor() {
  //     super();
  //     this.handleDelete = this.handleDelete.bind(this);
  //     this.handleReset = this.handleReset.bind(this);
  //     this.handleIncreament = this.handleIncreament.bind(this);
  //   }

  render() {
    // console.log("counters");
    const {
      onReset,
      counters,
      onIncrement,
      onDelete,
      onDecrement,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => onDelete({ id: counter.id })}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
