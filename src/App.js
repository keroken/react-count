import React, {Component} from 'react';
import './App.css';

const App = () => <Counter />;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      textValue: 'initial value'
    }
  }

  handleTextChange(textValue) {
    this.setState({textValue: textValue});
  }

  handleCountChange(textLength) {
    this.setState({count: textLength});
  }

  render() {
    return (
      <React.Fragment>
        <div>文字数: {this.state.count}</div>
        <textarea
          type="text"
          onChange={e => this.handleTextChange(e.target.value)}
          onKeyUp={e => this.handleCountChange(e.target.value.length)}
        />
      </React.Fragment>
    );
  }
}


export default App;
