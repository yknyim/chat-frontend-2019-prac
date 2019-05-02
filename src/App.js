import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Chatlist from './Chatlist';
import Chatform from './Chatform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: ''
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
          <Chatform 
            text={this.state.text} 
            handleChange={this._setText} 
            handleSend={this._sendMessage}
          />
      </div>
    );
  }

  _setText = () => {
    console.log('App: _setText got called');
  }

  _sendMessage = () => {
    console.log('App: _sendMessage got called');
  }

}

export default App;
