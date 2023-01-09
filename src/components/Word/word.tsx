import useStyles from "../../styles/useStyles";
import { WordProperties, WordStatus } from "../../interfaces/WordStatus";

export const Word = ({ word, wordStatus, inputValue }: WordProperties) => {
  const classes = useStyles();

  switch (wordStatus) {
    case WordStatus.Match:
      return <span className={classes.wordMatched}>{word}</span>;
    case WordStatus.Mismatch:
      return <span className={classes.wordMistaken}>{word}</span>;
    case WordStatus.Current:
      const charsElement = word.split("").map((char: string, index: number) => {
        let className = classes.normal;

        if (inputValue && index < inputValue.length) {
          className =
            inputValue[index] === word[index]
              ? classes.correct
              : classes.mistake;
        }

        return (
          <span className={className} key={index}>
            {char}
          </span>
        );
      });

      return <span className={classes.word}>{charsElement}</span>;
    default:
      return <span className={classes.normal}>{word}</span>;
  }
};
