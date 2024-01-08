import React from 'react';
import Filter from '../components/Filter';
import data from './../../data.json';

function Home() {
  const onChangeFilter = (filterValue, region) => {
    console.log(filterValue, region);
  };

  return (
    <div className="home-page">
      <div className="home-conainer wrapper">
        <Filter onChange={onChangeFilter} />
        <div className="country-items">
          {data.map((country) => {
            return (
              <div key={country.alpha3Code} className="item">
                <div className="country-image">
                  <img src={country.flags.svg} alt="" />
                </div>
                <div className="country-info">
                  <h2>{country.name}</h2>
                  <div>
                    Population: <span>{country.population}</span>
                  </div>
                  <div>
                    Region: <span>{country.region}</span>
                  </div>
                  <div>
                    Capital: <span>{country.capital}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
