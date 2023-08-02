import { useState } from "react";

export default function DailyExercise() {
  const [pushUpCount, setPushUpCount] = useState(0);
  const [crunchesCount, setCrunchesCount] = useState(0);
  const [planksCount, setPlanksCount] = useState(0);
  const [squatsCount, setSquatsCount] = useState(0);
  const [jumpRopeCount, setJumpRopeCount] = useState(0);
  const [pullUpsCount, setPullUpsCount] = useState(0);

  function handleClick(exercise: string) {
    if (exercise === "PushUps") {
      setPushUpCount(pushUpCount + 1);
    } else if (exercise === "Crunches") {
      setCrunchesCount(crunchesCount + 1);
    } else if (exercise === "Planks") {
      setPlanksCount(planksCount + 1);
    } else if (exercise === "Squats") {
      setSquatsCount(squatsCount + 1);
    } else if (exercise === "JumpRope") {
      setJumpRopeCount(jumpRopeCount + 1);
    } else if (exercise === "PullUps") {
      setPullUpsCount(pullUpsCount + 1);
    }
  }

  function handleReset(exercise: string) {
    if (exercise === "PushUps") {
      setPushUpCount(0);
    } else if (exercise === "Crunches") {
      setCrunchesCount(0);
    } else if (exercise === "Planks") {
      setPlanksCount(0);
    } else if (exercise === "Squats") {
      setSquatsCount(0);
    } else if (exercise === "JumpRope") {
      setJumpRopeCount(0);
    } else if (exercise === "PullUps") {
      setPullUpsCount(0);
    }
  }


  return (
    <div>
      <button onClick={() => handleClick("PushUps")}>PushUps</button>
      <button onClick={() => handleClick("Crunches")}>Crunches</button>
      <div></div>
      <button onClick={() => handleClick("Planks")}>Planks</button>
      <button onClick={() => handleClick("Squats")}>Squats</button>
      <div></div>
      <button onClick={() => handleClick("JumpRope")}>Jump Rope</button>
      <button onClick={() => handleClick("PullUps")}>Pull Ups</button>
      <div></div>
      <div>
        Todays Exercises are:
        <div></div>
        Push-Ups: {pushUpCount}{" "}
        <button onClick={() => handleReset("PushUps")}>Reset</button>
        <div></div>
        <div></div>
        Crunches: {crunchesCount}{" "}
        <button onClick={() => handleReset("Crunches")}>Reset</button>
        <div></div>
        Planks: {planksCount}{" "}
        <button onClick={() => handleReset("Planks")}>Reset</button>
        <div></div>
        Squats: {squatsCount}{" "}
        <button onClick={() => handleReset("Squats")}>Reset</button>
        <div></div>
        Jump-Rope: {jumpRopeCount}{" "}
        <button onClick={() => handleReset("JumpRope")}>Reset</button>
        <div></div>
        Pull-Ups: {pullUpsCount}{" "}
        <button onClick={() => handleReset("PullUps")}>Reset</button>
      </div>
    </div>
  );
}
