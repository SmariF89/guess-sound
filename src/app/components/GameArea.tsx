'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const GameAreaInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-right: dotted;
	flex-grow: 9;
	margin: 8px;
`;

export default function GameArea() {
	const [currentGame, setCurrentGame] = useState<number>(1);
	return (
		<GameAreaInnerContainer>
			<h2>{`Game #${currentGame}`}</h2>
			<p>Hér kemur leikurinn</p>
		</GameAreaInnerContainer>
	);
}
