import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";


class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4},
    ]
  }

  maxId = 4;

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.state.players}/>
        {
          this.state.players.map((player) =>
            <Player name={player.name} score={player.score}
                    id={player.id} key={player.id}
                    removePlayer={this.handleRemovePlayer}
                    changeScore={this.handleChangeScore}/>)
        }
        <AddPlayerForm addPlayer={this.handleAppPlayer}/>
      </div>
    )
  }

  handleRemovePlayer = (id) => {
    console.log(id);
    // 자식을 삭제하는 로직
    this.setState(prevState => ({
        players: prevState.players.filter(player => player.id !== id)
      })
    )
  }

  handleChangeScore = (id, delta) => {
    console.log('handleChangeScore: ', id, delta);
    this.setState(prevState => {
      prevState.players.forEach(player => {
        if (player.id === id) {
          player.score += delta;
        }
      })
      return {
        players: [...prevState.players]
      }
    })
  }

  handleAppPlayer = (name) => {
    console.log(name);
    //name을 가진 player객체를 this.state.players 배열에 추가
  //key와 값이 이름이 동일하면 생략가능
    const players = {name ,score : 0, id : ++this.maxId}
    this.setState(
      prevState=> {
        prevState.players.push(players);
        return {players : prevState.players}
      }
    )
  }
}
export default App;
