import React, { Component } from 'react';
import './App.css';


class MyButton extends Component {
  render() {
    return (
      <button 
        onClick={() => { this.props.handleClick(this.props.label); }}
        >
        {this.props.label}
      </button>
    );
  }
}

class MyLabel extends Component {
  render() {
    return (
      <p>Antes da props: {this.props.text}</p>
    )

  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText })
  }
 
  render() {
    return (
      <div className="App">
        <MyLabel text={this.state.labelText}/>
        <MyButton handleClick={this.setLabelText} label="botao1" />
        <MyButton handleClick={this.setLabelText} label="botao2" />
        <MyButton handleClick={this.setLabelText} label="botao3" />
      </div>
    );
  }

}

export default App;
