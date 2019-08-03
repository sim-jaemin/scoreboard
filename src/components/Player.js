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
				{name}
			</span>
				<Counter id={id} score={score}  />
			</div>
		);
	}

	componentWillReceiveProps(nextProps, nextContext) {
	  //console.log('componentWillReceiveProps', nextProps);
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
	  //console.log('shouldComponentUpdate', nextProps);
	  return nextProps.score !== this.props.score ? true:false;
	}
}



//디스패치 : 자식이 -> 부모에게 통신
//액션을 디스패치하는 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
  removePlayer: (id) => dispatch(removePlayer(id))
});

// eslint-disable-next-line no-undef
export default connect(null,mapActionToProps)(Player);

