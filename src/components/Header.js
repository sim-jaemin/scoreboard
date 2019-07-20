import React from 'react';
// 앞글자는 대문자, 반드시 react element를 리턴
export const Header = ({title, totalPlayers}) => {
  // 객체 해체 할당
  return (
	<header className="header">
	  <h1 className="h1">{title}</h1>
	  <span className="stats">Players: {totalPlayers}</span>
	</header>
  )
}