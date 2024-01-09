import React, { useEffect, useState } from 'react';

function Filter({ onChange }) {
  const [filterValue, setFilterValue] = useState('');
  const [region, setRegion] = useState(0);

  const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  useEffect(() => {
    onChange(filterValue, region);
  }, [filterValue, region]);

  return (
    <div className="filter-section">
      <div className="col">
        <div className="form-group">
          <label htmlFor="filterValue">
            <i className="fa fa-search"></i>
          </label>
          <input
            type="text"
            name="filterValue"
            id="filterValue"
            placeholder="Search fo a country..."
            onInput={(e) => setFilterValue(e.target.value)}
          />
        </div>
      </div>
      <div className="col">
        <div className="form-group">
          <label htmlFor="region">
            <i className="fa-solid fa-earth-americas"></i>
          </label>

          <select
            name="region"
            id="region"
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value={0}>Filter by region</option>
            {options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
