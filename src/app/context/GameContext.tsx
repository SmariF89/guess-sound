'use client';

import React from 'react';
import { Dispatch, createContext, useContext, useEffect, useReducer } from 'react';
import { gameReducer } from '../reducers/GameReducer';
import { GameAction, GameState } from '../types';

const initialState: GameState = { currentGame: 1 };

type GameContextValue = [GameState, Dispatch<GameAction>];
const GameContext = createContext<GameContextValue>([initialState, () => {}]);

export function GameContextProvider(props: { children?: React.ReactNode }) {
	const [gameState, setGameState] = useReducer(gameReducer, initialState, () => {
		if (typeof window !== undefined) {
			const localData = localStorage.getItem('gameState');
			return localData ? JSON.parse(localData) : initialState;
		}
	});

	useEffect(() => {
		localStorage.setItem('gameState', JSON.stringify(gameState));
	}, [gameState]);

	return <GameContext.Provider value={[gameState, setGameState]}>{props.children}</GameContext.Provider>;
}

export default function useGameContext() {
	return useContext(GameContext);
}
