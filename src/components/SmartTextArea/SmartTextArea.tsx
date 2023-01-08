import { Box } from "@material-ui/core";
import { GameStatus } from "../../interfaces/GameStatus";
import { SmartTextAreaProps } from "../../interfaces/SmartTextAreaProps";
import useStyles from "../../styles/useStyles";

export const SmartTextArea = ({
  words,
  getCharClassname,
  currentWordIndex,
  gamesStatus,
}: SmartTextAreaProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.wordBox}>
      {words.map((word: string, wordIndex: number) => (
        <span
          key={wordIndex}
          className={
            gamesStatus === GameStatus.Playing && wordIndex === currentWordIndex
              ? classes.currentWord
              : classes.word
          }
        >
          {currentWordIndex === wordIndex
            ? word.split("").map((char, charIndex) => (
                <span
                  key={charIndex}
                  className={getCharClassname(wordIndex, charIndex, char)}
                >
                  {char}
                </span>
              ))
            : word}
        </span>
      ))}
    </Box>
  );
};
