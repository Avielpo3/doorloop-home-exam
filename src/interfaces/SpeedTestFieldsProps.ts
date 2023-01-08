import { GameStatus } from "./GameStatus";

export interface SpeedTestFieldsProps {
  setCurrentInput: (e: any) => void;
  handleKeyDown: (e: any) => void;
  handleRestart: (e: any) => void;
  gameStatus: GameStatus;
  currentInput: string;
}
