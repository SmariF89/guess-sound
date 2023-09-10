'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import useGameContext from '../context/GameContext';

const GameAreaInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-right: dotted;
	flex-grow: 9;
	margin: 8px;
`;

export default function GameArea() {
	const [gameState] = useGameContext();
	return (
		<GameAreaInnerContainer>
			<h2>{`Game #${gameState.currentGame}`}</h2>
			<p>Hér kemur leikurinn</p>
		</GameAreaInnerContainer>
	);
}
