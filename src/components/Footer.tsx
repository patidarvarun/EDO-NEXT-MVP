import React, { useState } from "react";
import Pagination from "./Pagination";
import ProgressBar from "./ProgressBar";

const Footer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 35;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const [sliderValue, setSliderValue] = useState(26.3);

  const handleSliderChange = (newValue: number) => {
    setSliderValue(newValue);
  };

  return (
    <footer className="fixed bottom-0 w-full bg-white text-white py-4 h-18 flex flex-row justify-around">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li className="hover:underline w-[98px] border-r-2 ">
            <span className="flex pr-10">
              <img
                src="/assets/images/edit-2.svg"
                alt="Logo"
                className="w-5 h-5 mr-3"
              />
              <a href="#" className="text-black font-medium">
                Notes
              </a>
            </span>
          </li>
          <li className="hover:underline w-[60px]  border-r-2 ">
            <a href="#" className="text-black font-medium">
              Page
            </a>
          </li>
        </ul>
        <div className="text-[#252424]">
          <span>
            17" x 11" - 0.125" Bleed - TEST 2024 NICOLE YEARBOOK Yearbook
          </span>
        </div>
        <ul className="flex space-x-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChangePage={handlePageChange}
          />
          <div className="flex ">
            <ProgressBar value={sliderValue} onChange={handleSliderChange} />
          </div>

          <li className="hover:underline flex items-center ">
            <span className="flex items-center border-r-2 pr-6 pl-2 border-l-2 pl-4">
              <img
                src="/assets/images/headphone.svg"
                alt="Logo"
                className="w-5 h-5 mr-3"
              />
              <a href="#" className="text-[#252424]">
                Chat online
              </a>
            </span>
          </li>
          <li className="hover:underline flex items-center ">
            <a href="#" className="text-black font-semibold	 text-lg pl-2">
              ?
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
