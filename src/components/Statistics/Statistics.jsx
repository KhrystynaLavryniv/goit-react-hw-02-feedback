import React from "react";
import PropTypes from "prop-types";
import { Stat, StatList } from "./Statistics.style";

const Statistics = ({ options, total, positivePercentage }) => {
  const optionsArr = [];
  Object.keys(options).forEach((key) => {
    const keyObj = {
      key,
      value: options[key],
    };
    optionsArr.push(keyObj);
  });

  return (
    <div>
      <StatList>
        {optionsArr.length > 0 &&
          optionsArr.map(({ key, value }, i) => (
            <Stat key={i.toString()}>
              {key}: {value}{" "}
            </Stat>
          ))}
      </StatList>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
