import { formFieldsConfig } from "@/utils/staticContent";
import React, { useState } from "react";

interface PeopleInfo {
  [key: string]: string;
}

interface PeopleDetailProps {
  onClose: () => void;
  peopleInfo: PeopleInfo;
  onSubmit: (data: PeopleInfo) => void;
}

const FormInput: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  defaultValue?: string;
}> = ({ label, value, onChange, defaultValue }) => (
  <div className="w-1/2">
    <label className="font-montserrat text-xs font-semibold leading-15 text-left text-gray-600">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
      className="w-[377px] text-gray-700 h-[44px] px-3 py-2 border rounded-md"
    />
  </div>
);

const FormSelect: React.FC<{
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  defaultValue?: string;
}> = ({ label, value, options, onChange, defaultValue }) => (
  <div className="w-1/2">
    <label className="font-montserrat text-xs font-semibold leading-15 text-left text-gray-600">
      {label}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-[377px] text-gray-700 h-[44px] px-3 py-2 border rounded-md bg-transparent"
    >
      {defaultValue && (
        <option value="" disabled hidden>
          {defaultValue}
        </option>
      )}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

function PeopleDetail({ onClose, peopleInfo, onSubmit }: PeopleDetailProps) {
  const [formData, setFormData] = useState<PeopleInfo>(peopleInfo);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
      <div className="fixed z-50 inset-0 flex items-center justify-center">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-x-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[1260px] h-[618px]">
          <div className="sm:items-start">
            <div className="bg-white rounded-lg">
              <div className="flex flex-row justify-between items-center pl-4 pr-5 pt-3 pb-4 border-b-2">
                <h1 className="text-xl font-bold">People</h1>
                <button
                  onClick={onClose}
                  className="text-black hover:text-gray-700 text-2xl text-black"
                >
                  &times;
                </button>
              </div>
              <div className="flex bg-backgroundColor p-4">
                <div className="flex">
                  <p className="text-gray-600">People page </p>
                  <img
                    src="/assets/images/arrow-right-direction.svg"
                    alt="arrow"
                    className="w-5 h-5 ml-1 mr-1"
                  />
                </div>
                <div className="flex">
                  <p className="text-gray-600">Manage data </p>
                  <img
                    src="/assets/images/arrow-right-direction.svg"
                    alt="arrow"
                    className="w-5 h-5 ml-1 mr-1"
                  />
                </div>
                <div>
                  <p className="font-medium">Edit user</p>
                </div>
              </div>
              <div className="p-6 mx-auto bg-white rounded-lg overflow-hidden flex">
                <div className="w-1/3">
                  <img
                    src={peopleInfo.icon}
                    alt="Card Image"
                    className="p-4 bg-backgroundColor w-[384px] h-[403px] object-cover"
                  />
                </div>
                <div className="w-2/3 pl-4">
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap">
                      {Object.entries(formFieldsConfig).map(
                        ([field, config]: any) => (
                          <div
                            key={field}
                            className="mb-[12px] flex space-x-4 w-1/2"
                          >
                            {config.type === "text" ? (
                              <FormInput
                                label={config.label}
                                value={formData[field]}
                                onChange={(value) => handleChange(field, value)}
                                defaultValue={`${config.defaultValue}`}
                              />
                            ) : (
                              <FormSelect
                                label={config.label}
                                value={formData[field]}
                                options={config.options || []}
                                onChange={(value) => handleChange(field, value)}
                                defaultValue={`${config.defaultValue}`}
                              />
                            )}
                          </div>
                        )
                      )}
                    </div>
                    <div className="flex justify-end space-x-4 mt-[6px] pr-[20px]">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 border rounded-lg border-current w-[101px] h-[36px]"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#1B1B3A] text-white font-medium py-2 px-4 border border-[#1B1B3A] rounded-lg w-[258px] h-[36px]"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PeopleDetail;
