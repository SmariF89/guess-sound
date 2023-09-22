export type GameState = {
	currentGame: number;
};
export type GameAction = { type: 'SELECT_GAME'; payload: number };
// eslint-disable-next-line no-unused-vars
export type GameReducer = (state: GameState, action: GameAction) => GameState;

export type Game = { num: number };
