// ==UserScript==
// @name         Dark theme for wiki
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  try to take over the world!
// @author       vishnu priyan
// @match        https://en.wikipedia.org/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// ==/UserScript==

window.onload = (function() {
    'use strict';
    // Your code here...
    let watch = true;
    if(watch){
        $(document).ready(function() {
             $("*").css("background-color","#262626");
             $("*").css("color","#ffff");
             $("*a").css("color","#0ebeff");
        });
    }
})();