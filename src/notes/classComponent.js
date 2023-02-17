import "./styles.css";
import React, { Component } from "react";

/// class componets....

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

export default class App extends Component {
  //life cyle
  // initiliazing
  state = {
    counter: 1,
    nameObj: {}
  };

  // useEffect(()=>{
  //    fetchFunction(counter)
  // }, [counter])

  // mounting
  componentDidMount() {
    console.log("Mounting started");
    this.fetchData(this.state.counter);
  }

  // updation phase
  componentDidUpdate(prevProp, prevState) {
    console.log("Updation Happpen");
    if (prevState.counter !== this.state.counter) {
      this.fetchData(this.state.counter);
    }
  }

  fetchData(index) {
    fetch(`https://swapi.dev/api/people/${index}`)
      .then((res) => res.json())
      .then((data) => this.setState({ nameObj: data }));
  }

  countAdd = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="App">
        <Greeting />
        <Info name="B42" batch="weekend" />
        <Counter />
        <hr />
        <div>{this.state.nameObj.name || "Fetching..."}</div>
        <button onClick={this.countAdd}>Next {this.state.counter}</button>
        <hr />
        <Toggler />
      </div>
    );
  }
}

// New to Componet Creation
export class Greeting extends Component {
  render() {
    // all your js functions
    const date = new Date();
    const hours = date.getHours();

    let currentTime;
    if (hours < 12) {
      currentTime = "Morning";
    } else if (hours >= 12 && hours < 18) {
      currentTime = "Afternoon";
    } else {
      currentTime = "Night";
    }

    return <h1>Hi Good {currentTime} </h1>;
  }
}

// props with name
class Info extends Component {
  render() {
    return (
      <div>
        Welcome all {this.props.name} {this.props.batch}
      </div>
    );
  }
}

class Counter extends Component {
  // const [count, setCount] = useState()
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }
  // setCount(count + 1)
  increment() {
    this.setState((prevCount) => ({
      count: prevCount.count + 1
    }));
  }
  //without binding
  // setCount(count -1)
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h3>Counter</h3>
        <h4>{this.state.count}</h4>
        <button onClick={this.increment}>Inc</button>
        <button onClick={this.decrement}>Dec</button>
      </div>
    );
  }
}

// Toogleers
// condition  ? "light" : "dark"

class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      theme: "Dark"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState((prev) => {
      return {
        theme: prev.theme === "Light" ? "Dark" : "Light"
      };
    });
  }

  render() {
    return (
      <div>
        Theme : {this.state.theme}
        <div>
          <button onClick={this.handleChange}>Change</button>
        </div>
      </div>
    );
  }
}
