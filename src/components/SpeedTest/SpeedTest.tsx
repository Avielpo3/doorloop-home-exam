import { useState, useEffect } from "react";
import { WORD_BANK } from "../../mocks/mockWordBank";
import * as KeyCode from "keycode-js";
import { shuffleWords } from "../../helper/helper";
import useStyles from "../../styles/useStyles";
import { WordStatistics } from "../WordStatistics/WordStatistics";
import { SmartTextArea } from "../SmartTextArea/SmartTextArea";
import { GameStatus } from "../../interfaces/GameStatus";
import { SpeedTestFields } from "../SpeedTestFields/SpeedTestFields";
import { TEST_TIME_IN_SECONDS } from "../../constants/speedTest.const";

export const SpeedTest = () => {
  const classes = useStyles();

  const [intervalRef, setIntervalRef] = useState<NodeJS.Timer>();
  const [words, setWords] = useState<string[]>([]);
  const [countdown, setCountdown] = useState<number>(TEST_TIME_IN_SECONDS);
  const [currentInput, setCurrentInput] = useState<string>("");
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(-1);
  const [currentCharValue, setCurrentCharValue] = useState<string>("");

  const [correct, setCorrect] = useState<number>(0);
  const [mistakes, setMistakes] = useState<number>(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>(
    GameStatus.NotStarted
  );

  useEffect(() => {
    const shuffeled = shuffleWords(WORD_BANK);
    setWords(shuffeled);
  }, []);

  const startGame = () => {
    const intervalRef = setInterval(() => {
      setCountdown((prevCountdown: number) => {
        if (prevCountdown === 0) {
          clearInterval(intervalRef);
          setGameStatus(GameStatus.Finished);
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);

    setIntervalRef(intervalRef);
  };

  const getCharClassname = (
    wordIndex: number,
    charIndex: number,
    char: string
  ) => {
    if (
      gameStatus !== GameStatus.Finished &&
      currentWordIndex === wordIndex &&
      currentCharIndex === charIndex &&
      currentCharValue
    ) {
      return char === currentCharValue ? classes.correct : classes.mistake;
    } else {
      return "";
    }
  };

  const handleRestart = () => {
    setWords(shuffleWords(WORD_BANK));
    setCurrentWordIndex(0);
    setCurrentInput("");
    setCorrect(0);
    setMistakes(0);
    setGameStatus(GameStatus.NotStarted);
    setCountdown(TEST_TIME_IN_SECONDS);
    setCurrentCharIndex(-1);
    setCurrentCharValue("");
  };

  const handleKeyDown = (event: any) => {
    const { keyCode, key } = event;
    // Start the game when the user start typing
    if (gameStatus === GameStatus.NotStarted) {
      setGameStatus(GameStatus.Playing);
      startGame();
    }

    if (keyCode === KeyCode.KEY_SPACE) {
      checkWordMatches();
      setCurrentInput("");
      setCurrentWordIndex(currentWordIndex + 1);
      setCurrentCharIndex(-1);
      setCurrentCharValue("");

      // End game for the last word.
      if (words.length - 1 === currentWordIndex) {
        clearInterval(intervalRef);
        setGameStatus(GameStatus.Finished);
      }
      event.preventDefault();
    } else if (currentInput === "" && keyCode === KeyCode.KEY_BACK_SPACE) {
      if (currentWordIndex > 0) {
        setCurrentWordIndex(currentWordIndex - 1);
      }
      setCurrentCharIndex(-1);
      setCurrentCharValue("");
    } else if (
      currentInput !== "" &&
      keyCode === KeyCode.KEY_BACK_SPACE &&
      currentCharIndex > -1
    ) {
      setCurrentCharIndex(currentCharIndex - 1);
    } else {
      setCurrentCharIndex(currentCharIndex + 1);
      setCurrentCharValue(key);
    }
  };

  const checkWordMatches = () => {
    const wordToCompare = words[currentWordIndex];
    const isMatch = wordToCompare === currentInput.trim();
    isMatch ? setCorrect(correct + 1) : setMistakes(mistakes + 1);

    return isMatch;
  };

  return (
    <div className={classes.root}>
      <WordStatistics
        currentWordIndex={currentWordIndex}
        mistakes={mistakes}
        correct={correct}
        countdown={countdown}
      />

      <SmartTextArea
        words={words}
        getCharClassname={getCharClassname}
        currentWordIndex={currentWordIndex}
        gamesStatus={gameStatus}
      />

      <SpeedTestFields
        setCurrentInput={setCurrentInput}
        handleKeyDown={handleKeyDown}
        handleRestart={handleRestart}
        gameStatus={gameStatus}
        currentInput={currentInput}
      />
    </div>
  );
};
