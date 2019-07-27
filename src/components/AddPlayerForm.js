import React from 'react';

export class AddPlayerForm extends React.Component {

  	state = {
  	  value : ''
	}

	handleValueChange = (e) =>{
  	  //console.log(e);
  	  this.setState({value:e.target.value})
	}

  handleSubmit = (e) =>{
	//화명을 리플레쉬하는 기본 이벤트 막기
	e.preventDefault();
	//폼체크 , 입력폼 체크
	const playInput = document.getElementById("player");
	console.log(playInput.validity.valid);
	console.log('formcheck->',document.getElementById("form").checkValidity());

	if(!playInput.validity.valid){
	  //에러메시지보이기
	  return;
	}

	this.props.addPlayer(this.state.value);

  }
	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit} noValidate id="form">
				<input className="input" type="text" placeholder="enter a player's name" value={this.state.value} onChange={this.handleValueChange} required  id="player"></input>
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}
