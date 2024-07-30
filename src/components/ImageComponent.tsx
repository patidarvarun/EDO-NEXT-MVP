import React from "react";

const ImageComponent = (data: any) => {
  return (
    <div className="">
      <div className="border-b-[1px] pb-[13px]">
        <h2 className="pt-7 pl-2 text-gray-400">{data.data.name}</h2>
        <div className="grid grid-cols-1 justify-items-center">
          {data.data.commands.map((command: any) => (
            <div className="m-2" key={command.alt}>
              <img
                src={command.icon}
                alt={command.alt}
                className="w-52 h-[129px] border border-solid hover:border-[3px] hover:p-1 hover:border-red-500 rounded-md cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
