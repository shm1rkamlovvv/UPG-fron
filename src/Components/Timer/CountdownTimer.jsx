import React, { useEffect, useState } from "react";

const CountdownTimer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = { hours: "00", minutes: "00", seconds: "00" };

    if (difference > 0) {
      const h = String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const m = String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0"
      );
      const s = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");
      timeLeft = { hours: h, minutes: m, seconds: s };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-1 items-center font-golos">
      {Object.entries(timeLeft).map(([key, value], idx) => (
        <React.Fragment key={key}>
          <div className="bg-[#f5f5f7] dark:bg-blue dark:border dark:text-white rounded px-1.5 py-1.5 text-sm font-medium text-black w-[26px] text-center  duration-1000">
            {value[0]}
          </div>
          <div className="bg-[#f5f5f7] dark:bg-blue dark:border dark:text-white rounded px-1.5 py-1.5 text-sm font-medium text-black w-[26px] text-center duration-1000">
            {value[1]}
          </div>
          {idx < 2 && (
            <div className="text-black font px-0.5 text-lg flex items-center dark:text-white duration-1000">
              :
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CountdownTimer;
