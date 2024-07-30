import React, { useState } from "react";

interface TooltipProps {
  children: React.ReactNode;
  text1: string;
  text2: string;
  bgcolor: string;
  icon1: string;
  icon2: string;
  textcolor: string;
  fontSize: string;
  fontWeight1: string;
  fontWeight2: string;
  border: string;
  align: string;
  fontSizes: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  text1,
  text2,
  bgcolor,
  icon1,
  icon2,
  textcolor,
  fontSize,
  fontWeight1,
  fontWeight2,
  border,
  align,
  fontSizes,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          className={`absolute w-[200px] z-10 px-3 py-2 text-sm font-medium bg-${bgcolor} rounded-lg shadow-sm tooltip dark:bg-${bgcolor}`}
        >
          <div className="flex">
            {icon1 && <img src={icon1} alt="icon" className="mr-2" />}
            <p
              className={`text-${fontSizes} text-${align} text-${textcolor} ${fontWeight1}`}
            >
              {text1}
            </p>
          </div>
          <div className="flex">
            {icon2 && <img src={icon2} alt="icon" className="mr-2" />}
            <p
              className={`text-${fontSize} text-${align} text-${textcolor} ${fontWeight2}`}
            >
              {text2}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
