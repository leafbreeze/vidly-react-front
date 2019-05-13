import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
// import Counters from "./components/counters";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Home from "./components/home";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Ajax Call
    console.log("App - Mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
    // console.log("Event Handler Called", counterId);
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/rentals" component={Rentals} />
            <Route path="/customers" component={Customers} />
            <Route path="/movies" component={Movies} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
