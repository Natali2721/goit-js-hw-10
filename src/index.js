import './css/styles.css';
import Notiflix from 'notiflix';
import fetchCountries from './fetchCountries';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const inputElem = document.querySelector('input#search-box');
//console.log(inputElem);

inputElem.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));
