'use strict';

export function createFooterHTML(){
    // Create DOM elements: Footer
  const footerEl = document.createElement('footer');
  footerEl.classList.add('footer-container');
  const footerParagraphEl = document.createElement('p');
  footerParagraphEl.innerText = 'by Danny Osorio';
  
  const myGithubLinkEl = document.createElement('a');
  myGithubLinkEl.href = 'https://github.com/dyosorio';
  myGithubLinkEl.target = '_blank';
  const myGithubItemEl = document.createElement('i');
  myGithubItemEl.classList.add('fab');
  myGithubItemEl.classList.add('fa-github');
  
  const myCodepenLinkEl = document.createElement('a');
  myCodepenLinkEl.href = 'https://codepen.io/danny-osorio';
  myCodepenLinkEl.target = '_blank';
  const myCodepenItemEl = document.createElement('i');
  myCodepenItemEl.classList.add('fab');
  myCodepenItemEl.classList.add('fa-codepen');
  
  // Add elements to the DOM: Footer
  document.body.appendChild(footerEl);
  footerEl.appendChild(footerParagraphEl);
  footerParagraphEl.appendChild(myGithubLinkEl);
  myGithubLinkEl.appendChild(myGithubItemEl);
  footerParagraphEl.appendChild(myCodepenLinkEl);
  myCodepenLinkEl.appendChild(myCodepenItemEl);
};