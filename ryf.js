// ==UserScript==
// @name         KAO#1:ruanyifeng
// @namespace    https://www.bennythink.com/
// @version      0.2
// @description  浏览阮一峰博客时，不必关闭广告屏蔽器。
// @author       BennyThink
// @supportURL   https://github.com/BennyThink/KeepABPOn
// @license      MIT
// @updateURL    https://raw.githubusercontent.com/BennyThink/KeepABPOn/master/ryf.js
// @match        *://*.ruanyifeng.com/*
// @grant        none
// ==/UserScript==

var ryf = document.querySelector('#main-content').innerHTML;

function ruanyifeng() {

    document.getElementsByClassName('asset-meta')[0].nextElementSibling.style = 'display:none';
    document.querySelector('#main-content').innerHTML = ryf;
}

setTimeout(ruanyifeng, 1001);



