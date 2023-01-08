import { Button, TextField } from "@material-ui/core";
import { GameStatus } from "../../interfaces/GameStatus";
import { SpeedTestFieldsProps } from "../../interfaces/SpeedTestFieldsProps";
import "./SpeedTestFields.css";

export const SpeedTestFields = ({
  setCurrentInput,
  handleKeyDown,
  gameStatus,
  currentInput,
  handleRestart,
}: SpeedTestFieldsProps) => {
  return (
    <div className="fields">
      <TextField
        className="text-field"
        label="Word"
        variant="outlined"
        onKeyDown={handleKeyDown}
        onChange={(e) => setCurrentInput(e.target.value)}
        disabled={gameStatus === GameStatus.Finished}
        value={currentInput}
        size="medium"
      />

      <Button
        variant="outlined"
        disabled={gameStatus !== GameStatus.Finished}
        onClick={handleRestart}
      >
        Restart
      </Button>
    </div>
  );
};
