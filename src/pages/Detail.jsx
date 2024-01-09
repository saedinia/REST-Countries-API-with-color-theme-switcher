import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from './../../data.json';

function Detail() {
  const { alpha3code } = useParams();

  const country = data.find((item) => item.alpha3Code === alpha3code);

  const currencies = [];
  country.currencies.map((currency) => {
    currencies.push(currency.name);
  });

  const languages = [];
  country.languages.map((language) => {
    languages.push(language.name);
  });

  const countriesWithMatchingBorders = data.filter((item) =>
    country.borders.some((code) => item.alpha3Code === code),
  );

  return (
    <div className="detail-page">
      <div className="detail-container wrapper">
        <Link to="/" className="btn">
          <i className="fa-solid fa-arrow-left"></i> Back
        </Link>

        <div key={country.alpha3Code} className="detail-country">
          <div className="col">
            <img src={country.flags.svg} alt="" />
          </div>

          <div className="col information">
            <div className="country-name">
              <h2>{country.name}</h2>
            </div>
            <div className="country-info">
              <div className="col">
                <div>
                  Native Name: <span>{country.nativeName}</span>
                </div>
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
                  Sub Region: <span>{country.subregion}</span>
                </div>
                <div>
                  Capital: <span>{country.capital}</span>
                </div>
              </div>
              <div className="col">
                <div>
                  Top Level Domain: <span>{country.topLevelDomain}</span>
                </div>
                <div>
                  Currencies:
                  <span>{currencies.join(',')}</span>
                </div>
                <div>
                  Languages: <span>{languages.join(',')}</span>
                </div>
              </div>
            </div>

            <div className="country-borders">
              <div className="title">Border Countries:</div>
              <div className="borders">
                {countriesWithMatchingBorders.map((border) => {
                  return (
                    <Link
                      key={border.alpha3Code}
                      className="btn"
                      to={`/detail/${border.alpha3Code}`}
                    >
                      {border.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
