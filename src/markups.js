const countryList = document.querySelector('country-list');
const countryInfo = document.querySelector('country-info');

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

function markupInfo(countries) {
  const country = countries[0];
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

export { countryList, countryInfo, markupInfo, markupList };
