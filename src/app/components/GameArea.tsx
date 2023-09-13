'use client';

import React from 'react';
import styled from 'styled-components';
import useGameContext from '../context/GameContext';
import AudioPlayer from './AudioPlayer';

const GameAreaInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-grow: 9;
	margin: 8px;
`;

export default function GameArea() {
	const [gameState] = useGameContext();
	return (
		<GameAreaInnerContainer>
			<h2>{`Game #${gameState.currentGame}`}</h2>
			<AudioPlayer src='/audio_test_files/hl/1.wav' />
		</GameAreaInnerContainer>
	);
}
