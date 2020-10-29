'use strict';

export function fetchData(url) {
    return fetch(url)
    .then(response => response.json())
    .catch(error => {
        console.log(error);
        mainEl.innerHTML = `<div class="error-message">${error}</div>`;
    });
}