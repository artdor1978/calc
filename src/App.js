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

const Elements = (props) => {
  return (
    <div className={props.z}>
      {props.xxx.map (item =>
      <div key={item.id}> 
        <div className="button" id={item.title} onClick={() => props.inpNum(item.sign)}>{item.sign}</div>
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
    message:'0',
    };
    this.handleClickNum = this.handleClickNum.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
    this.handleClickRes = this.handleClickRes.bind(this);
  }
  handleClickNum(e) {
    const updDisplay = this.state.message;
    //updDisplay == 0 ? this.setState({message: e,}): (updDisplay[updDisplay.length-1] === '.' ? (e === "." ? this.setState({message: updDisplay,}):this.setState({message: updDisplay+e,})):this.setState({message: updDisplay+e,}))
    updDisplay.includes('.')&& e=='.' ? this.setState({message: updDisplay}) : (updDisplay == '0' ? this.setState({message: e,}) : this.setState({message: updDisplay+e,}))
  //https://stackoverflow.com/questions/7959975/how-to-replace-all-but-the-first-occurrence-of-a-pattern-in-string
  //.match(/(-?\d+\.?\d*)$/)[0]
  }
  handleClickClear(e) {
    this.setState({
      message: '0'
    })
  }
  handleClickRes(e) {
    const updDisplay = this.state.message
    this.setState({
      //message: parseFloat(eval(updDisplay.replace(/\.+/g, '.')).toFixed(4))
      message: parseFloat(eval(updDisplay).toFixed(4))+'',
    })
  }
  render() {
  return (
    <div className="App">
      <h1>JS Calculator</h1>
      <div id="calc">
      <div id="display">{this.state.message}</div>
        <span id="numbers">
          <Elements  xxx={this.state.elementsArr.filter(item => item.id>0&item.id<11||item.id==15)} z='num' inpNum={this.handleClickNum}/>
        </span>
        <span id="clearKey">
          <Elements xxx={this.state.elementsArr.filter(item => item.id==16)} z='cle' inpNum={this.handleClickClear}/>
        </span>
        <span id="operators">
          <Elements  xxx={this.state.elementsArr.filter(item => item.id>10&item.id<15)} z='ope' inpNum={this.handleClickNum}/>
        </span>
        <span id="equalsKey">
        <Elements  xxx={this.state.elementsArr.filter(item => item.id==0)} z='equ' inpNum={this.handleClickRes}/>
        </span>
      </div>
      <h6 >artdor1978</h6>
    </div>
  )
}
}


export default App;
