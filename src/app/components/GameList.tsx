import React from 'react';
import { styled } from 'styled-components';

const GameListContainer = styled.div`
	border-style: solid;
`;

const gameList: string[] = ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5'];

export default function GameList() {
	return (
		<GameListContainer>
			{gameList.map((g) => (
				<p>{g}</p>
			))}
		</GameListContainer>
	);
}
