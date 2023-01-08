import { GameStatus } from "./GameStatus";

export interface SmartTextAreaProps {
  words: string[];
  getCharClassname: (
    wordIndex: number,
    charIndex: number,
    char: string
  ) => string;
  currentWordIndex: number;
  gamesStatus: GameStatus;
}
