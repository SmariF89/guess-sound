'use client';

import React from 'react';
import { styled } from 'styled-components';
import useGameContext from '../context/GameContext';
import { Game } from '../types';

const GameListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	flex-grow: 1;
`;

const gameList: Game[] = Array.from(Array(20).keys()).map<Game>((n: number) => {
	return { num: n + 1 };
});

export default function GameList() {
	const [gameState, setGameState] = useGameContext();
	return (
		<GameListContainer>
			<h2>Catalog</h2>
			<ul>
				{gameList.map((g) => (
					<a
						onClick={(e: React.MouseEvent<HTMLElement>) =>
							setGameState({ type: 'SELECT_GAME', payload: g.num })
						}
					>
						<li key={g.num}>
							{gameState.currentGame === g.num ? <b>{`Game #${g.num}`}</b> : <p>{`Game #${g.num}`}</p>}
						</li>
					</a>
				))}
			</ul>
		</GameListContainer>
	);
}
