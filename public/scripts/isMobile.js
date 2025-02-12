/*
  script from https://xobyte.org
    https://xobyte.org/scripts/isMobile.js
  This script literally just checks if your browser is capable of hovering over items without clicking, basically if you have a mouse or not. 
  
  In my opinion, it's better than trying to filter out endless types of phone brands from the navigator's user agent with regex. Generally, mobile devices don't use mice, and those that do should receive the desktop experience. 
  
  USAGE: embed this script and call window.isMobile() anywhere, it will return true if it is mobile phone or tablet of any kind and false if it is any type of computer with a mouse.

*/


window.isMobile = function () {
    const button = document.getElementById("theDoor");
    if (window.matchMedia("(any-hover:none)").matches) {
        button.setAttribute("href", "/mobilever/mobilesite.html");
    } else {
        button.setAttribute("href", "/homepage.html");
    }
};