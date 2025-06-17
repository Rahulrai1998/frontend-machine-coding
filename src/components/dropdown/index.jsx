import React, { useState } from "react";

const defaultOptions = [
  { label: "India", value: "in" },
  { label: "United States", value: "us" },
  { label: "Germany", value: "de" },
  { label: "Japan", value: "jp" },
  { label: "Brazil", value: "br" },
  { label: "Australia", value: "au" },
  { label: "Canada", value: "ca" },
];
const Dropdown = ({ options = defaultOptions, placeholder = "Search..." }) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (option) => {
    setSelected(option);
    setSearch("");
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-menu">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={placeholder}
          className="dropdown-search"
        />
        <div className="dropdown-options">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className="dropdown-option"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="dropdown-option disabled">No results found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
