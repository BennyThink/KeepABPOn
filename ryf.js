// ==UserScript==
// @name         KAO#1:ruanyifeng
// @namespace    https://www.bennythink.com/
// @version      0.3
// @description  浏览阮一峰博客时，不必关闭广告屏蔽器。
// @author       BennyThink
// @supportURL   https://github.com/BennyThink/KeepABPOn
// @license      MIT
// @updateURL    https://raw.githubusercontent.com/BennyThink/KeepABPOn/master/ryf.js
// @match        *://*.ruanyifeng.com/*
// @grant        none
// ==/UserScript==

var ryf = document.querySelector('#main-content').innerHTML;

function loadjscssfile(filename) {
    var fileref = document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

function ruanyifeng() {

    document.getElementsByClassName('asset-meta')[0].nextElementSibling.style = 'display:none';
    document.querySelector('#main-content').innerHTML = ryf;
}

setTimeout(ruanyifeng, 1001);

loadjscssfile('/static/themes/theme_scrapbook/theme_scrapbook.css');



