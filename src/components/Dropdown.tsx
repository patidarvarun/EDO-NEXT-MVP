interface DropdownProps<T> {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  optionalPerameterCheck?: boolean;
}

const Dropdown: React.FC<DropdownProps<string | number>> = ({
  options,
  value,
  onChange,
  optionalPerameterCheck,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as any);
  };

  return (
    <select
      value={value}
      onChange={handleSelectChange}
      className={`w-full ${
        optionalPerameterCheck ? "p-[12px] text-[17px]" : "p-2"
      }  bg-white text-gray-900 rounded-lg mt-2 cursor-pointer border border-solid border-[#e9e7e7]`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
