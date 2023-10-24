import React from "react";
import DisplayComponent from "./DisplayComponent";

const Displays = (props) => {
  const { days, months, year } = props;
  return (
    <div className="flex flex-col transition delay-1000">
      <DisplayComponent number={year} label="years" />
      <DisplayComponent number={months} label="months" />
      <DisplayComponent number={days} label="days" />
    </div>
  );
};

export default Displays;
