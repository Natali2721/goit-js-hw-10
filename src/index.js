import './css/styles.css';
import Notiflix from 'notiflix';
import API from './fetchCountries';
//import { countryList, countryInfo, markupInfo, markupList } from './markups';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const inputElem = document.querySelector('input#search-box');

const countryList = document.querySelector('country-list');
const countryInfo = document.querySelector('country-info');

//fetchCountries('uk');

inputElem.addEventListener(
  'input',
  debounce(e => {
    let name = inputElem.value.trim();

    //console.log(name);

    if (name.length === 0) {
      //resetMarkup(countryInfo, countryList);
      return;
    }

    API.fetchCountries(name)
      .then(data => {
        console.log(data);

        console.log(data.length);
        if (data.length === 1) {
          Notiflix.Notify.info('Found');
          console.log(data[0].name.common);
        } else if (data.length > 1 && data.length <= 7) {
          Notiflix.Notify.info('We found some...');
        } else {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        }
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      });
  }, 1000)
);

function resetMarkup(info, list) {
  info.innerHTML = '';
  list.innerHTML = '';
}
function markupList(countries) {
  const countriesArray = countries.map(country => {
    return `<li class="country-list__item">
            <img src=${country.flags.png} width="80">
            <span class="country-list__name">${country.name.official}</span>
        </li>`;
  });
  countriesArray.forEach(markupCountry => {
    countryList.insertAdjacentHTML('beforeend', markupCountry);
  });
}

function makeMarkupInfo(array) {
  const country = array[0];
  const info = `<div class="country-info__box">
            <img src=${country.flags.png} width="50">
            <span class="country-info__name">${country.name.official}</span>
            </div>
            <p class="country-text"><span class="country-info--accent">Capital:</span> ${
              country.capital
            }<p>
            <p class="country-text"><span class="country-info--accent">Population:</span> ${
              country.population
            }</p>
            <p class=country-text"><span class="country-info--accent">Languages:</span> ${Object.values(
              country.languages
            ).join(', ')}</p>`;

  countryInfo.insertAdjacentHTML('beforeend', info);
}
