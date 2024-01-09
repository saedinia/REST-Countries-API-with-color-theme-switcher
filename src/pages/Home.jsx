import React, { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import data from './../../data.json';
import { Link } from 'react-router-dom';

function Home() {
  const [filterValue, setFilterValue] = useState('');
  const [region, setRegion] = useState(0);

  const onChangeFilter = (filterValue, region) => {
    setFilterValue(filterValue);
    setRegion(region);
  };

  let countriesMatchingCriteria = [];

  countriesMatchingCriteria = data.filter((country) => {
    if (
      (filterValue &&
        country.name.toLowerCase().indexOf(filterValue.toLowerCase()) === -1) ||
      (region && country.region !== region)
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="home-page">
      <div className="home-conainer wrapper">
        <Filter onChange={onChangeFilter} />
        <div className="country-items">
          {countriesMatchingCriteria.map((country) => {
            return (
              <Link
                key={country.alpha3Code}
                to={`/detail/${country.alpha3Code}`}
              >
                <div className="item">
                  <div className="country-image">
                    <img src={country.flags.svg} alt="" />
                  </div>
                  <div className="country-info">
                    <h3>{country.name}</h3>
                    <div>
                      Population:
                      <span>
                        {country.population
                          .toLocaleString('en-US')
                          .replace(/,/g, '.')}
                      </span>
                    </div>
                    <div>
                      Region: <span>{country.region}</span>
                    </div>
                    <div>
                      Capital: <span>{country.capital}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
