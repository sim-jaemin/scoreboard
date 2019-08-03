import React from 'react';
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect} from "react-redux";

export class Player extends React.Component {
	render() {
		const {name, score, removePlayer, id} = this.props;

		console.log(name, 'rendered');

		return	(
			<div className="player">
			  <span className="player-name">
				  <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
				  {this.props.children}
				  {name}
			  </span>
			  <Counter id={id} score={score}  />
			</div>
		);
	}
	/*
	//아래 코드는 해당 데이터만 렌더링하기때문에 왕관표시에 문제가 발생하여 전체를 랜더링하기 위하여 주석처리 2019-08-03
	componentWillReceiveProps(nextProps, nextContext) {
	  //console.log('componentWillReceiveProps', nextProps);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
	  //console.log('shouldComponentUpdate', nextProps);
	  return nextProps.score !== this.props.score ? true:false;
	}


	 */
}



//디스패치 : 자식이 -> 부모에게 통신
//액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
  removePlayer: (id) => dispatch(removePlayer(id))
});

// eslint-disable-next-line no-undef
export default connect(null,mapActionToProps)(Player);

