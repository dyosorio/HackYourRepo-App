/* eslint-disable import/prefer-default-export */
'use strict';

export function addChangeEventListener(
  selectEl,
  fetchData,
  url,
  contributorsSectionEl,
  contributorCard,
  repoNameParagraphEl,
  repoDescParagraphEl,
  repoForksParagraphEl,
  repoUpParagraphEl,
) {
  selectEl.addEventListener('change', event => {
    fetchData(
      'https://api.github.com/orgs/HackYourFuture/repos?per_page=100',
    ).then(data => {
      // loop through the data and match the select value with a repo name inside the data
      for (let index = 0; index < data.length; index++) {
        contributorsSectionEl.appendChild(contributorCard);
        const repoData = data[index];
        if (event.target.value === repoData.name) {
          // Add the selected repo data to the DOM
          repoNameParagraphEl.innerHTML = `Repository: ${repoData.name}`;
          repoDescParagraphEl.innerHTML = `Description: ${repoData.description}`;
          repoForksParagraphEl.innerHTML = `Forks: ${repoData.forks}`;
          repoUpParagraphEl.innerHTML = `Updated: ${repoData.updated_at}`;

          console.log(repoData.name);
          const contributorsURL = `https://api.github.com/repos/HackYourFuture/${repoData.name}/contributors`;

          fetchData(contributorsURL).then(data => {
            console.log(data);
            
            let contributorContent = '';
            for (let index = 0; index < data.length; index++) {
              const contributorData = data[index];
              // a contributor card will be generated per each single contributor
              contributorContent += `<div class="repo single-contributor">
                    <img src='${contributorData.avatar_url}' alt='${contributorData.login}' class='profile-pic'>
                    <a href="${contributorData.html_url}" target="_blank">${contributorData.login}</a>
                    <span class="contributions">${contributorData.contributions}</div>
                    </span>`;
              contributorCard.innerHTML = contributorContent;
            }
          });
        }
        // Append it outside fetchData(contributorsURL), so the contributors card will reset every time the selected values change
        contributorsSectionEl.appendChild(contributorCard);
      }
    });
  });
}
