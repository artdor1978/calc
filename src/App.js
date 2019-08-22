import React from 'react';
import './App.css';

const elementsArr = [
  {
  sign: "=",
  title: "equals",
  id:0,
  },
  {
  sign: "1",
  title:  "one",
  id:2,
  },
  {
  sign: "2",
  title:  "two",
  id:3,
  },
  {
  sign: "3",
  title:  "three",
  id:4,
  },
  {
  sign: "4",
  title:  "four",
  id:5,
  },
  {
  sign: "5",
  title:  "five",
  id:6,
  },
  {
  sign: "6",
  title:  "six",
  id:7,
  },
  {
  sign: "7",
  title:  "seven",
  id:8,
  },
  {
  sign: "8",
  title:  "eight",
  id:9,
  },
  {
  sign: "9",
  title:  "nine",
  id:10,
  },
  {
  sign: "0",
  title: "zero",
  id:1,
  },
  {
  sign: "+",
  title:  "add",
  id:11,
  },
  {
  sign: "-",
  title:  "subtract",
  id:12,
  },
  {
  sign: "*",
  title:  "multiply",
  id:13,
  },
  {
  sign: "/",
  title:  "divide",
  id:14,
  },
  {
  sign: ".",
  title:  "decimal",
  id:15,
  },
  {
  sign: "clear",
  title:  "clear",
  id:16,
  },
];

  
    // {elementsArr.map (item => 
    //       <div key={item.id}>
    //         <button id={item.title}>{item.sign}</button>
    //       </div>
    //     )}
    // </div>

const Elements = (props) => {
  return (
    <div className={props.z}>
      {props.xxx.map (item =>
      <div key={item.id}> 
        <div className="button" id={item.title}>{item.sign}</div>
      </div>
      )}
    </div>
    )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    elementsArr,
    message:'sdddddddd',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      message: 0
    })
  }
  render() {
  return (
    <div className="App">
      <h1>JS Calculator</h1>
      <div id="calc">
      <div id="display">{this.state.message}</div>
        <span id="numbers">
          <Elements  xxx={this.state.elementsArr.filter(item => item.id>0&item.id<11||item.id==15)} z='num'/>
        </span>
        <span id="clearKey" onClick={this.handleClick}>
          <Elements xxx={this.state.elementsArr.filter(item => item.id==16)} z='cle' onClick={this.handleClick}/>
        </span>
        <span id="operators">
          <Elements  xxx={this.state.elementsArr.filter(item => item.id>10&item.id<15)} z='ope'/>
        </span>
        <span id="equalsKey">
        <Elements  xxx={this.state.elementsArr.filter(item => item.id==0)} z='equ'/>
        </span>
      </div>
      <h6 >artdor1978</h6>
    </div>
  )
}
}


export default App;
