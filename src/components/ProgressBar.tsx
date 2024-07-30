import React, { useState } from "react";
import style from "@/styles/progressBar.module.css";

interface ProgressBarProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  min = 0,
  max = 100,
  value = 0,
  onChange,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setCurrentValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const getPercentage = () => {
    return Math.round((currentValue / (max - min)) * 450);
  };

  return (
    <div className="flex items-center">
      <div className={style.range}>
        <input
          type="range"
          min={min.toString()}
          max={max.toString()}
          value={currentValue.toString()}
          onChange={handleChange}
          className={style.slider}
          id="myRange"
        />
      </div>
      <span className="ml-3 text-sm text-[#1B1B3A] font-bold">
        {getPercentage()}%
      </span>
    </div>
  );
};

export default ProgressBar;
