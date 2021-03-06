import React, { Component } from "react";
import Counter from "./counterComponent";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };

  handleReset =()=>{
    const counters=this.state.counters.map(c=>{
      c.value=0;
      return c;
    });
    this.setState({counters});
  };

  handleIncrement = counter =>{
    const counters= [...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
  }
  
  render() {
    console.log("Props", this.props);
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
