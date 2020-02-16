import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title : 'App title'
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.input.value)
    // alert('submitted')
  }

  render(){
    // const list = [
    //   'Item 1',
    //   'Item 2',
    //   'Another item'
    // ];

    return (
      <div className = 'App'>
        <h1>
          {this.state.title}
        </h1>
        <form onSubmit = {this.onSubmit}>
          <input onChange = {this.onChange} ref = {input =>this.input = input}/>
        </form>
      </div>
    )
  }
}

export default App;
