import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Chatlist from './Chatlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    setInterval(async () => {
      const {data} = await axios.get('/api');
      console.log(data);
      this.setState({
        messages: data
      });
    }, 2000);

  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo1" alt="logo" />
          <img src={logo} className="App-logo2" alt="logo" />
          <img src={logo} className="App-logo3" alt="logo" />
          <img src={logo} className="App-logo2" alt="logo" />
          <img src={logo} className="App-logo1" alt="logo" />
          <h1>Chat App</h1>
          <Chatlist messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
