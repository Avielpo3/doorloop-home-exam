import { Box } from "@material-ui/core";
import { GameStatus } from "../../interfaces/GameStatus";
import { SmartTextAreaProps } from "../../interfaces/SmartTextAreaProps";
import useStyles from "../../styles/useStyles";
import cx from "classnames";
import { Word } from "../Word/word";
import { WordStatus } from "../../interfaces/WordStatus";

export const SmartTextArea = ({
  words,
  currentWordIndex,
  gamesStatus,
  wordsHistory,
  currentInput,
}: SmartTextAreaProps) => {
  const classes = useStyles();

  const getWordStatus = (wordIndex: number) => {
    let status = WordStatus.Normal;

    if (wordIndex < wordsHistory.length) {
      status =
        words[wordIndex] === wordsHistory[wordIndex]
          ? WordStatus.Match
          : WordStatus.Mismatch;
    } else if (wordIndex === wordsHistory.length) {
      status = WordStatus.Current;
    }

    return status;
  };

  return (
    <Box className={classes.wordBox}>
      {words.map((word: string, wordIndex: number) => (
        <span
          key={wordIndex}
          className={
            wordIndex === currentWordIndex ? classes.currentWord : classes.word
          }
        >
          <Word
            word={words[wordIndex]}
            wordStatus={getWordStatus(wordIndex)}
            inputValue={currentInput}
          />
        </span>
      ))}
    </Box>
  );
};
