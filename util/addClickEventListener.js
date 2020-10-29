/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

'use strict';

// This function inputs the data to the select menu, when selectEl is clicked
export function addClickEventListener(selectEl, fetchData, url) {
  selectEl.addEventListener('click', () => {
    fetchData(url).then(data => {
      // grab array of objects
      const repoArray = data;
      console.log(repoArray);

      for (let index = 0; index < repoArray.length; index++) {
        const repoName = repoArray[index].name;
        const repOptionEl = document.createElement('option');
        repOptionEl.innerHTML = `
                <option value="${index}">${repoName}</option>
                `;
        selectEl.appendChild(repOptionEl);
      }
    });
  });
}
