
(async function () {
  const headerHTMLRequest = await fetch('/mobilever/mobfiles/header.html');
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector('.header-container').innerHTML = headerHTML;
})();
(async function () {
  const headerHTMLRequest = await fetch('/get/footer.html');
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector('.footer-container').innerHTML = headerHTML;
})();
(async function () {
  const headerHTMLRequest = await fetch('/get/footerbuttons.html');
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector('.buttons-container').innerHTML = headerHTML;
})();
(async function () {
  const headerHTMLRequest = await fetch('/get/updates.html');
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector('.updatesbox').innerHTML = headerHTML;
})();
(async function () {
  const headerHTMLRequest = await fetch('/get/statusbox.html');
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector('#status-box').innerHTML = headerHTML;
})();
(async function () {
  const headerHTMLRequest = await fetch('/get/todolist.html');
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector('#gettodolist').innerHTML = headerHTML;
})();
function rssmobile() {
  (async function () {
  const headerHTMLRequest =  await fetch('https://rss.bloople.net/?url=https%3A%2F%2Felite784.online%2Frss784.xml&codegen=js');
  const headerHTML =  await headerHTMLRequest.text();
  document.querySelector('#rssbox').innerHTML = headerHTML;
})();
}