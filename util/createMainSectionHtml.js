'use strict';

export function createMainSectionHTML(contributorsSectionEl, contributorCard, repoNameParagraphEl, repoDescParagraphEl, repoForksParagraphEl, repoUpParagraphEl){
    // Create DOM elements: Main Section
  const mainEl = document.createElement('main');
  mainEl.classList.add('main-container');
  const repoSectionEl = document.createElement('section');
  repoSectionEl.classList.add('repo-container');
  contributorsSectionEl.classList.add('contributors-container');
  
  // section repo-container is child of main section mainEl
  const repoNameDivEl = document.createElement('div');
  repoNameDivEl.classList.add('repo');
  repoNameDivEl.id = 'repository';
  repoNameParagraphEl.classList.add('repoParagraph');
  repoNameParagraphEl.innerText = 'Repository: ';
  
  const repoDescriptionDivEl = document.createElement('div');
  repoDescriptionDivEl.classList.add('repo');
  repoDescriptionDivEl.id = 'description';
  repoDescParagraphEl.classList.add('repoParagraph');
  repoDescParagraphEl.innerText = 'Description:	 ';
  
  const repoForksDivEl = document.createElement('div');
  repoForksDivEl.classList.add('repo');
  repoForksDivEl.id = 'forks';
  repoForksParagraphEl.classList.add('repoParagraph');
  repoForksParagraphEl.innerText = 'Forks: ';
  
  const repoUpdatedDivEl = document.createElement('div');
  repoUpdatedDivEl.classList.add('repo');
  repoUpdatedDivEl.id = 'updated';
  repoUpParagraphEl.classList.add('repoParagraph');
  repoUpParagraphEl.innerText = 'Updated: ';
  
  // section contributors-container is child of main section mainEl
  const contributorsDivEl = document.createElement('div');
  contributorsDivEl.classList.add('contributors');
  contributorsDivEl.id = 'contributors';
  const contributorsParagraphEl = document.createElement('p');
  contributorsParagraphEl.classList.add('contributorsParagraph');
  contributorsParagraphEl.innerText = 'Contributors: ';
  
  // Add elements to the DOM: Main Section
  document.body.appendChild(mainEl);
  mainEl.appendChild(repoSectionEl);
  mainEl.appendChild(contributorsSectionEl);
  
  repoSectionEl.appendChild(repoNameDivEl);
  repoNameDivEl.appendChild(repoNameParagraphEl);
  repoSectionEl.appendChild(repoDescriptionDivEl);
  repoDescriptionDivEl.appendChild(repoDescParagraphEl);
  repoSectionEl.appendChild(repoForksDivEl);
  repoForksDivEl.appendChild(repoForksParagraphEl);
  repoSectionEl.appendChild(repoUpdatedDivEl);
  repoUpdatedDivEl.appendChild(repoUpParagraphEl);
  
  contributorsSectionEl.appendChild(contributorsDivEl);
  contributorsDivEl.appendChild(contributorsParagraphEl);
};