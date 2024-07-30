import ModalView from "@/utils/modalView";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const colors = [
  "#000000",
  "#7F7F7F",
  "#BFBFBF",
  "#FF0000",
  "#FF7F7F",
  "#FFBF7F",
  "#FFFF00",
  "#FF00FF",
  "#FF7FFF",
  "#FFBF00",
  "#00FF00",
  "#7FFF7F",
  "#BF7FFF",
  "#00FFFF",
  "#007FFF",
];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [colorPicker, setColorPicker] = useState<string>("#aabbcc");
  const [customColorSelected, setCustomColorSelected] = useState<string[]>([]);
  const [openModal, setModal] = useState<boolean>(false);

  const handleColorClick = (color: any) => {
    setSelectedColor(color);
  };
  const handleModal = () => {
    setModal(!openModal);
  };

  const handleSelectedCustomColor = () => {
    setCustomColorSelected((prevColors) => [...prevColors, colorPicker]);
    handleModal();
  };

  const handleCustomFooter = () => {
    return (
      <div className="border-t border-gray-300 flex justify-between items-center px-4 pt-2 ">
        <div className="text-sm font-medium flex items-center text-black mr-4">
          Selected color :{" "}
          <button
            className={`w-4 h-4 rounded-full mx-3`}
            style={{ backgroundColor: colorPicker }}
          ></button>
          {colorPicker}
        </div>
        <button
          className="px-4 py-1 bg-[#0063df] text-white rounded"
          onClick={handleSelectedCustomColor}
        >
          Done
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="bg-backgroundColor rounded-b-lg shadow-lg">
        <div className="grid grid-cols-7 gap-[10px] p-3">
          {colors.map((color, index) => (
            <div className={`w-6 h-6 bg-white p-0.5 rounded`}>
              <button
                key={index}
                onClick={() => handleColorClick(color)}
                className={`w-4 h-4 rounded-full m-0.5 `}
                style={{ backgroundColor: color }}
              ></button>
            </div>
          ))}
        </div>
        <div className="mt-2">
          <div className="text-gray-700 font-bold text-sm bg-white p-3">
            STANDARD
          </div>
          <div className="grid grid-cols-7 gap-[10px] mt-2 pl-3 pr-3">
            <div className={`w-6 h-6 bg-white p-0.5  rounded`}>
              <button className="w-4 h-4 rounded-full bg-pink-500 m-0.5"></button>
            </div>
            <div className={`w-6 h-6 bg-white p-0.5  rounded`}>
              <button className="w-4 h-4 rounded-full bg-red-500 m-0.5"></button>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="text-gray-700 font-bold text-sm bg-white p-3">
            CUSTOM
          </div>
          <div className="grid grid-cols-7 gap-[10px] mt-2 pl-3 pb-3 pr-3">
            <div className={`w-6 h-6 bg-white p-0.5  rounded`}>
              {" "}
              <button className="m-0.5" onClick={handleModal}>
                <img src="/assets/images/add-circle.svg" />
              </button>
            </div>
            <div className={`w-6 h-6 bg-white p-0.5  rounded`}>
              {" "}
              <button className="m-0.5">
                <img src="/assets/images/brush.svg" />
              </button>
            </div>
            <div className={`w-6 h-6 bg-white p-0.5  rounded`}>
              {" "}
              <button className="w-4 h-4 rounded-full m-0.5 bg-yellow-500"></button>
            </div>
            <div className={`w-6 h-6 bg-white p-0.5  rounded`}>
              {" "}
              <button className="w-4 h-4 rounded-full m-0.5 bg-green-500"></button>
            </div>
            <div className={`w-6 h-6 bg-white p-0.5  rounded`}>
              {" "}
              <button className="w-4 h-4 rounded-full m-0.5 bg-pink-500"></button>
            </div>
            <div className={`w-6 h-6 bg-white p-0.5  rounded`}>
              {" "}
              <button className="w-4 h-4 rounded-full m-0.5 bg-red-500"></button>
            </div>
            <div className={`w-6 h-6 bg-white p-0.5  rounded`}>
              {" "}
              <button className="w-4 h-4 rounded-full m-0.5 bg-[#FF00FF]"></button>
            </div>
            {customColorSelected.map((color, index) => (
              <div className={`w-6 h-6 bg-white p-0.5  rounded`}>
                <button
                  key={index}
                  onClick={() => handleColorClick(color)}
                  className={`w-4 h-4 rounded-full m-0.5`}
                  style={{ backgroundColor: color }}
                ></button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {openModal && (
          <div className="z-10 fixed top-0 left-0 w-full h-full bg-[#000000cf] flex justify-center items-center">
            <ModalView
              header={{
                title: "Pick a custom color",
                closeButtonFunction: handleModal,
              }}
              children={
                <div className="px-4 py-4 flex justify-center items-center">
                  <HexColorPicker
                    color={colorPicker}
                    onChange={setColorPicker}
                  />
                </div>
              }
              footer={{
                children: handleCustomFooter(),
                isSingleButton: false,
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ColorPicker;
