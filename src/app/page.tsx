'use client';

import React from 'react';
import Game from './components/Game';
import { GameContextProvider } from './context/GameContext';

export default function Home() {
	return (
		<div>
			<GameContextProvider>
				<Game />
			</GameContextProvider>
		</div>
	);
}
