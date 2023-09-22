type GameGuess = {
	guess: string | 'Skipped';
};

type GameProgress = {
	guesses: GameGuess[];
	lost: boolean;
	won: boolean;
};

type Game = {
	num: number;
	progress: GameProgress;
};

export type GameState = {
	currentGame: number;
	games: Game[];
	catalog: number[];
	catalogNames: str[];
};

export type GameAction = { type: 'SELECT_GAME'; payload: number };
// eslint-disable-next-line no-unused-vars
export type GameReducer = (state: GameState, action: GameAction) => GameState;

// declare let Bla: {
// 	creeps: { [key: string]: Creep };
// };
