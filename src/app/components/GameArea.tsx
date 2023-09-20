'use client';

import React from 'react';
import styled from 'styled-components';
import useGameContext from '../context/GameContext';
import AudioPlayer from './AudioPlayer';
import GuessInput from './GuessInput';

const GameAreaInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 8px;
`;

const AudioPlayerContainer = styled.div`
	margin-top: 16px;
	display: flex;
	flex-direction: column;
	align-content: space-between;
	width: 30%;
`;

export default function GameArea() {
	const [gameState] = useGameContext();
	return (
		<GameAreaInnerContainer>
			<h2>{`Game #${gameState.currentGame}`}</h2>
			<AudioPlayerContainer>
				<AudioPlayer src='/audio_test_files/hl/1.wav' />
				<AudioPlayer src='/audio_test_files/hl/2.wav' />
				<AudioPlayer src='/audio_test_files/hl/3.wav' />
				<AudioPlayer src='/audio_test_files/hl/4.wav' />
				<AudioPlayer src='/audio_test_files/hl/5.wav' />
				<AudioPlayer src='/audio_test_files/hl/6.wav' />
			</AudioPlayerContainer>
			<GuessInput />
		</GameAreaInnerContainer>
	);
}
