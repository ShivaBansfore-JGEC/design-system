import{jsx as e}from"react/jsx-runtime";var t=[],n=[];!function(e,r){if(e&&"undefined"!=typeof document){var o,a=!0===r.prepend?"prepend":"append",i=!0===r.singleTag,c="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(i){var d=t.indexOf(c);-1===d&&(d=t.push(c)-1,n[d]={}),o=n[d]&&n[d][a]?n[d][a]:n[d][a]=s()}else o=s();65279===e.charCodeAt(0)&&(e=e.substring(1)),o.styleSheet?o.styleSheet.cssText+=e:o.appendChild(document.createTextNode(e))}function s(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var o="prepend"===a?"afterbegin":"beforeend";return c.insertAdjacentElement(o,e),e}}(".primary-button {\n  background-color: blue;\n  color: white;\n  padding: 8px;\n  border: none;\n  border-radius: 8px; }\n  .primary-button:hover {\n    background-color: #3c3cf2; }\n",{});const r=({label:t,onClick:n})=>e("div",{children:e("button",Object.assign({className:"button primary-button",onClick:n},{children:t}))});export{r as Button};
//# sourceMappingURL=index.js.map