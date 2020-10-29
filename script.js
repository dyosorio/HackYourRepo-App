'use strict';

import { createHeaderHTML } from './util/createHeaderHtml.js';
import { createMainSectionHTML } from './util/createMainSectionHtml.js';
import { createFooterHTML } from './util/createFooterHtml.js';
import { fetchData } from './util/fetchData.js';
import { addClickEventListener } from './util/addClickEventListener.js';
import { addChangeEventListener } from './util/addChangeEventListener.js';

const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

// Create DOM elements: header
const selectEl = document.createElement('select');
createHeaderHTML(selectEl);
//crete DOM elements: main section
const contributorsSectionEl = document.createElement('section');
const contributorCard = document.createElement('div');
const repoNameParagraphEl = document.createElement('p');
const repoDescParagraphEl = document.createElement('p');
const repoForksParagraphEl = document.createElement('p');
const repoUpParagraphEl = document.createElement('p');
createMainSectionHTML(contributorsSectionEl, contributorCard, repoNameParagraphEl, repoDescParagraphEl, repoForksParagraphEl, repoUpParagraphEl);
//create DOM elements: footer
createFooterHTML();

function main() {
  // create fetch function
  fetchData(url);

  //input the repo data to the select menu, when the select element is clicked
  addClickEventListener(selectEl, fetchData, url);

  //input data to repo and contributor cards 
  addChangeEventListener(selectEl, fetchData, url, contributorsSectionEl, contributorCard, repoNameParagraphEl, repoDescParagraphEl, repoForksParagraphEl, repoUpParagraphEl);
}

window.onload = main();
