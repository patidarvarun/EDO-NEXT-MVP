import React from "react";

interface ClickedModelProps {
  onSaveAsDraft: () => void;
  onSaveAsTemplate: () => void;
}

const ClickedModel: React.FC<ClickedModelProps> = ({
  onSaveAsDraft,
  onSaveAsTemplate,
}) => {
  return (
    <div className="modelOpen absolute top-10 right-[140px] bg-white  w-[200px] p-2 h-[80px] rounded-lg">
      <div className="flex cursor-pointer mb-2" onClick={onSaveAsDraft}>
        <img
          src="/assets/images/flash.svg"
          alt="icon"
          className="mr-2 w-[16px]"
        />
        <p className={`text-lg text-left text-zinc-600 font-light`}>
          Save as a Draft
        </p>
      </div>
      <div className="flex cursor-pointer" onClick={onSaveAsTemplate}>
        <img
          src="/assets/images/document-download.svg"
          alt="icon"
          className="mr-2 w-[16px]"
        />
        <p className={`text-lg text-left text-zinc-600 font-light`}>
          Save as a Template
        </p>
      </div>
    </div>
  );
};

export default ClickedModel;
