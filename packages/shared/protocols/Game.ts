import { CardData, CardColors } from "@shared/protocols/Card"
import { PlayerData } from "@shared/protocols/Player"

export type GameEvents =
"GameStateChanged" |
"GameStarted" |
"GameCreated" |
"GameEnded" |
"PlayerWon" |
"PlayerUno" |
"PlayerJoined"

export type GameStatus =
"waiting" |
"playing" |
"ended"

export type GameType =
"private" |
"public"

export interface Game {
	/**
	 * Type of the game
	 */
	type: GameType
	/**
	 * Max players number
	 */
	maxPlayers: number
	/**
	 * Status of current game
	 */
	status: GameStatus
	/**
	 * Round counter
	 */
	round: number
	/**
	 * Game ID
	 */
	id: string
	/**
	 * Player[] index
	 */
	currentPlayerIndex: number
	/**
	 * Player[] index
	 */
	nextPlayerIndex: number
	/**
	 * Card Color
	 */
	currentGameColor: CardColors
	/**
	 * Game name
	 */
	title: string
	/**
	 * Cards that can be used by players
	 */
	availableCards: CardData[]
	/**
	 * Cards used by players
	 */
	usedCards: CardData[]
	/**
	 * Initial cards (all above come from here)
	 */
	cards: CardData[]
	/**
	 * Current players
	 */
	players: PlayerData[]
}
