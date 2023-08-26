'use client';

import React from 'react';
import { styled } from 'styled-components';
import GameList from './GameList';

const GameContainer = styled.div`
	border-style: solid;
`;

export default function Game() {
	return (
		<GameContainer>
			<GameList />
		</GameContainer>
	);
}
