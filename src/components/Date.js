import React, { useContext, useEffect } from "react";
import DateContext from "../context/DateContext";
import { prevDate, nextDate, toStringDate } from "../helpers/date";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Date = () => {
  const { date, setDate } = useContext(DateContext);
  useEffect(() => {
    const today = toStringDate();
    console.log(today);
  }, []);

  return (
    <div className="container d-flex justify-content-center mt-3 mb-3">
      <div className="text-align-center">
        <div
          className="btn mr-1 d-print-none"
          onClick={() => setDate(prevDate(date))}
        >
          <FaArrowCircleLeft size="2rem" />
        </div>
        <input
          type="date"
          style={{ textAlign: "center" }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="h-100"
        />
        <div
          className="btn ml-1 d-print-none"
          onClick={() => setDate(nextDate(date))}
        >
          <FaArrowCircleRight size="2rem" />
        </div>
      </div>
    </div>
  );
};

export default Date;
