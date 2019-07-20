import React from 'react';
import './App.css';


//앞글자는 대문자, 반드시 react element를 리턴
const Header = ({title,totalPlays}) => {
  //console.log(props);
  //객체 해체 할당.
  //const {title,totalPlays} = props;
  return  (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <span className="stats">Players:{totalPlays}</span>
    </header>
  )};
const Player = (props) => (
  <div className='player'>
    <span className='player-name'>
      <button className='remove-player'  onClick={() => props.removePlayer(props.id)}>x</button>
    </span>
    <span className='player-name'>{props.name}</span>
    <Counter/>
  </div>
);


class Counter extends  React.Component{
  //1.시간에 따라 변하는 데이터는 state라는 모델로 정의
  //2. state를 변경하는 방법은 setState()밖에 없다.
  //3. state 는  merge(overwriteiong)
  //4.setState() 비동기로 처리된다.
//5. 이벹ㄴ느 우측에는 함수 선언문이 와야한다.
  state = {
    score : 0
  };

  changeScore = (delta) => {
    console.log(this.state.score);
    //this.state.score += 1;
    //  this.setState(
    //    {score: this.state.score + delta}
    //  );
    this.setState(prevState=>({score: prevState.score + delta}))
  };

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={()=>this.changeScore(-1)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment"  onClick={()=>this.changeScore(1)}> + </button>
      </div>
    )
  };
}


export  class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', id: 1},
      {name: 'HONG', id: 2},
      {name: 'KIM', id: 3},
      {name: 'PARK', id: 4},
    ]
  };
  // 1) player 삭제 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log(id);

    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }))
  };

  render() {
    return (
      <div className='scoreboard'>
        <Header title='My Scoreboard' totalPlayers={11} />
        {
          this.state.players.map(player => (
              <Player name={player.name} key={player.id} id={player.id}
                      removePlayer={this.handleRemovePlayer}/>
            )
          )
        }
      </div>
    );
  }
}

export default App;