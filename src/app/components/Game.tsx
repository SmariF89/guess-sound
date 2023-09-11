'use client';

import React from 'react';
import { styled } from 'styled-components';
import GameMenu from './GameMenu';
import Banner from './Banner';
import GameArea from './GameArea';

const GameContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	font-family: arial;
`;

const GameAreaContainer = styled.div`
	display: flex;
	flex-grow: 8;
`;

export default function Game() {
	return (
		<GameContainer>
			<Banner />
			<GameAreaContainer>
				<GameMenu />
				<GameArea />
			</GameAreaContainer>
		</GameContainer>
	);
}
