'use client';

import React from 'react';
import Game from './components/Game';
import { GameContextProvider } from './context/GameContext';
import { ConfigProvider, theme } from 'antd';

export default function Home() {
	return (
		<div>
			<ConfigProvider
				theme={{
					algorithm: theme.darkAlgorithm,
				}}
			>
				<GameContextProvider>
					<Game />
				</GameContextProvider>
			</ConfigProvider>
		</div>
	);
}
