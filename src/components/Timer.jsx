import { useState, useEffect } from "react";
import NewValue from "./new";
const Timer =()=> {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const toggletime = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div className="flex flex-col ">
      <h2 className="text-center text-4xl text-black">Timer </h2>
      <div className="text-4xl my-3 flex justify-center  items-center">
        {hours}:{minutes}:{seconds}
      </div>
      <div className="flex justify-center items-center ">
        <button
          className={`bg-gray-600 px-5 py-1 rounded border-gray-300 cursor-pointer mx-2 ${isRunning ? 'bg-yellow-500 text-white': 'bg-green-800 text-white'}`}
          onClick={toggletime}
        >
          {isRunning ? "Pause " : "Start"}
        </button>
        <button
          className="bg-gray-600 px-5 py-1 rounded border-gray-200 text-white hover:bg-red-600  cursor-pointer mx-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <NewValue/>
    </div>
  );
}

export default Timer;