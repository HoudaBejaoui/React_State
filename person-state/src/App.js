// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initial state with person information, show flag, and time interval
  state = {
    person: {
      fullName: "Albert Einstein",
      bio: "Genius physicist, creator of the theory of relativity, Nobel laureate, advocate for peace, iconic thinker.",
      imgSrc: "https://media.sudouest.fr/13298067/1200x-1/einstein-langue-1600-1600.jpg?v=1670579321",
      profession: "Theoretician Physician"
    },
    show: false, // Flag to control whether to show the person's profile
    timeInterval: 0 // State to track the time interval since component mount
  };

  componentDidMount() {
    // Set up an interval to update the timeInterval state every second
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval to avoid memory leaks when the component is removed from the DOM
    clearInterval(this.interval);
  }

  // Define the structure of the component
  render() {
    return (
      <div className="App">
        <h1>Welcome, here!</h1>
        {/* Conditional rendering based on the show state */}
        {this.state.show && (
          <div className="Profile">
            <img src={this.state.person.imgSrc} alt="Person" />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
        {/* Button to toggle the show state */}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          View Profile
        </button>
        {/* Display the time interval since component mount */}
        <p className="Interval">Time interval since mount: {this.state.timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;