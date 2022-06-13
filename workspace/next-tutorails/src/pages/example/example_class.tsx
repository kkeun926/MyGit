import React, { Component } from "react";

export default class example extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("초기값");
  }



  // static getDerivedStateFromProps(props, state){
  //   return {count: props.cnt}
  //  props가 변화했을 때에만 일부 데이터를 다시 계산 - useMemo
  //  props 밑에 일부 state만 재설정 시 render 내부에서 this 대신 props 사용
  // }

  // changeNumber = () => {
  //   this.setState({count: 6})
  //   console.log("바뀜")
  // }

  shouldComponentUpdate() {
    return true;
  }
  changeNumber = () => {
    this.setState({ count: 9 });
    console.log("바뀜");
    // 랜더링을 계속 해야하는지 마는지 boolean 값 기본값은 true
  };

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   document.getElementById('div1').innerHTML =
  //     "Before the update, the count number is" + prevState.count;
  // }

  // componentDidUpdate() {
  //   document.getElementById('div2')?.innerHTML =
  //     "The update count number is " + this.state.count;
  // }

  componentDidMount() {
    setTimeout(() =>{
      this.setState({count: 8})
      console.log("갱신이 일어난 직후")
      // 조건문으로 감싸지 않으면 무한반복이 일어날 수 있음
      //
    }, 3000)
  }



  /*
  1. mount
    - constructor
      constructor(props)
      생성자. 해당 컴포넌트가 마운트되기 전에 호출
    - static getDerivedStateFromProps
    - render
    - componentDidMount
  */

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <p>{this.state.date}</p>
        <p>this is{this.state.count}</p>
        <button type="button" onClick={this.changeNumber}>
          번호바꾸기
        </button>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
