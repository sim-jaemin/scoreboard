import React from 'react';
import axios from 'axios';

export class Heroes extends React.Component {

  state = {
	heroes: []
  }
  componentDidMount() {
	this.getHeroes();
  }

  //async를 붙이면 promise가 리턴
  //async는 반드시 await와 함께하사용
  //await 뒤에는 promise가 오고 결과가 올때 까지 기다렸다가 결과를 리턴
  getHeroes = async () => {
	let response = await axios.get('http://ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000/api/user/heroes');
	console.log(response.data);
	this.setState({
	  heroes: response.data
	});
  }

  render() {
	return (
	  <ul>
		{this.state.heroes.map(hero => (
		  <li key={hero.id}>
			<img src={hero.photo} alt={hero.name}/>
			<span>{hero.name}</span>
		  </li>
		))}
	  </ul>
	)
  }


}