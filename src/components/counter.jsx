import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState);
    // console.log(prevState);
    // console.log(prevProps.counter.value);
    // console.log(this.props.counter.value);
  }
  render() {
    // console.log("counter");
    return (
      <div className="container">
        {/* <img src={this.state.imageUrl} alt="img" /> */}
        {/* {this.props.children} */}
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col-3">
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => {
                this.props.onDecrement(this.props.counter);
              }}
            >
              -
            </button>
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => {
                this.props.onIncrement(this.props.counter);
              }}
            >
              +
            </button>
            <button
              onClick={this.props.onDelete}
              className="btn btn-danger btn-sm m-2"
            >
              X
            </button>
          </div>
        </div>
        {/* <ul>{this.conditionalCount()}</ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const value = this.props.counter.value;
    return value === 0 ? <p className="m-auto">Zero</p> : value;
  }
}

export default Counter;

//   state = {
//     value: this.props.value,
//     imageUrl: "https://picsum.photos/100",
//     tags: ["tag1", "tag2", "tag3"],
//   };

// to bind event handlers
//   constructor(props) {
//     super(props);
//     // this.handleIncrement = this.handleIncrement.bind(this);
//     // this.handleDecrement = this.handleDecrement.bind(this);
//   }

//   conditionalCount() {
//     if (this.props.value === 0) return "Pleasee handleIncrement tags";
//     return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
//   }

//   handleIncrement() {
//     this.setState({ value: this.props.value + 1 });
//   }
//   handleDecrement() {
//     this.setState({ value: this.state.value - 1 });
//   }
