import React, { useContext, useEffect } from "react";
import DateContext from "../context/DateContext";
import { prevDate, nextDate } from "../helpers/date";

const Date = () => {
  const { date, setDate } = useContext(DateContext);
  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div className="container d-flex justify-content-center mt-2">
      <div className="text-align-center">
        <button
          className="btn btn-secondary mr-1"
          onClick={(date) => setDate(prevDate(date))}
        >
          {" "}
          Retroceder
        </button>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="h-100"
        />
        <button
          className="btn btn-secondary ml-1"
          onClick={(date) => setDate(nextDate(date))}
        >
          Avanzar{" "}
        </button>
      </div>
    </div>
  );
};

export default Date;
