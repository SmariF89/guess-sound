'use client';

import { GameAction, GameReducer, GameState } from '../types';

export const gameReducer: GameReducer = (state: GameState, action: GameAction) => {
	switch (action.type) {
		case 'SELECT_GAME':
			return {
				...state,
				currentGame: action.payload,
			};
		default:
			throw new Error('GameReducer encountered an unkown action type!');
	}
};
