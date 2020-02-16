import React, {Component} from 'react';
import './App.css';
import MyComponent from './MyComponent'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : 'App title'
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(_event) {
    this.setState({
      title: 'New App title'
    })
    // alert('submitted')
  }

  render(){


    return (
      <div className = 'App'>
        <h1>
          {this.state.title}
          <div onClick = {this.onClick}>Click Here!</div>
        </h1>
        <MyComponent 
          title = {3}
          name = 'The Anh'
          onClick = {this.onClick}
        />
      </div>
    )
  }
}

export default App;
