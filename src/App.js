import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('constructor 출력');
  }
  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({count: current.count+1,
    }));
  };
  
  minus = () =>{
    this.setState(current => ({count: this.state.count-1,
    }));
  };

  componentDidMount(){
    console.log('component mount 출력');
  }
  componentDidUpdate(){
    console.log('component update 출력');
  } // setState() - render() - componentDidUpdate()

  componentWillUnmount(){
    console.log('component unmount 출력');
  }

  render(){
    console.log('render 출력');
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button> 
      </div>
    );
  }
}

export default App;
