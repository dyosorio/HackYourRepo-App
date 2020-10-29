'use strict';

export function createHeaderHTML(selectEl){
    const headerEl = document.createElement('header');
    headerEl.classList.add('header-container');
    const headerDivEl = document.createElement('div');
    headerDivEl.classList.add('header-elements');
    const headerDivTitleEl = document.createElement('div');
    headerDivTitleEl.classList.add('header-title');
    const headerParagraphEl = document.createElement('p');
    headerParagraphEl.innerText = 'HYF Repositories';
    const selectDivEl = document.createElement('div');
    selectDivEl.classList.add('header-select');
    const selectLabelEl = document.createElement('label');
    selectLabelEl.for = 'selectMenu'; 
    selectEl.name = 'selectMenu';
    selectEl.id = 'selectMenu'; 
    const optionEl = document.createElement('option');
    optionEl.innerText = 'select an option...';
  
    // Add elements to the DOM: Header
    document.body.appendChild(headerEl);
    headerEl.appendChild(headerDivEl);
    headerDivEl.appendChild(headerDivTitleEl);
    headerDivTitleEl.appendChild(headerParagraphEl);
    headerDivEl.appendChild(selectDivEl);
    selectDivEl.appendChild(selectLabelEl);
    selectDivEl.appendChild(selectEl);
    selectEl.appendChild(optionEl);
};