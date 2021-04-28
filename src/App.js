import React, { Component } from "react";
// import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar"
// import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    console.log("Constructor")
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleIncreament = this.handleIncreament.bind(this);
    this.handleDecreament = this.handleDecreament.bind(this);
  }
  componentDidUpdate(prevState, prevProps) {
    // console.log(prevState)
    // console.log(prevProps)
    // console.log(this)
  }

  componentDidMount() {
    //Ajax call
    // console.log("did mount")
  }
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncreament(count) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(count);
    counters[index] = { ...count };
    counters[index].value++;
    this.setState({ counters });
  }

  handleDecreament(count) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(count);
    counters[index] = { ...count };
    if (counters[index].value > 0) { counters[index].value--; }
    this.setState({ counters });
  }
  handleReset() {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  }

  handleDelete(counterId) {
    const newCounters = this.state.counters.filter(
      (counter) => counter.id !== counterId.id
    );
    this.setState({ counters: newCounters });
  }

  render() {
    console.log("render")
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.length} />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncreament}
            onDecrement={this.handleDecreament}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
