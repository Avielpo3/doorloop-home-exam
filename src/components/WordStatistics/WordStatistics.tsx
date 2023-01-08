import { useEffect, useState } from "react";
import { TEST_TIME_IN_SECONDS } from "../../constants/speedTest.const";
import { StatisticsProps } from "../../interfaces/StatisticsProps";
import "./WordStatistics.css";

export const WordStatistics = ({
  correct,
  mistakes,
  currentWordIndex,
  countdown,
}: StatisticsProps) => {
  const [intervalSeconds, setIntervalSeconds] = useState(0);

  useEffect(() => {
    if (countdown && 60 - countdown !== 0) {
      const totalWordsCount = correct + mistakes;
      const totalTimePlaying = TEST_TIME_IN_SECONDS - countdown;
      const wpm = (totalWordsCount / totalTimePlaying) * 60;

      setIntervalSeconds(Math.round(wpm));
    }
  }, [countdown, mistakes, correct]);

  return (
    <div className="statistics">
      <div className="box">
        <p className="wpm">Words Per Minute</p>
        <h2>{intervalSeconds}</h2>
      </div>

      <div className="box">
        <p className="wpm">Correct Words</p>
        <h2>{correct}</h2>
      </div>

      <div className="box">
        <p className="wpm">Words Mistaken</p>
        <h2>{mistakes}</h2>
      </div>

      <div className="box">
        <p className="accuracy">Accuracy</p>
        <h2>
          {mistakes
            ? Math.round((correct / (correct + mistakes)) * 100)
            : "100"}
          %
        </h2>
      </div>

      <div className="box">
        <p className="accuracy">Time Remaining</p>
        <h2>{countdown}</h2>
      </div>
    </div>
  );
};
