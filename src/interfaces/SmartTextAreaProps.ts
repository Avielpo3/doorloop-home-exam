import { GameStatus } from "./GameStatus";

export interface SmartTextAreaProps {
  wordsHistory: string[];
  words: string[];
  currentInput?: string;
  currentWordIndex: number;
  gamesStatus: GameStatus;
}
