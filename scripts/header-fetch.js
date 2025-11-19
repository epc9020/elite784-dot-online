/*
Asset Fetch v.1.1.1
by some StackOverflow user
copied and pasted by elite784
*/





(async function () {
  const headerHTMLRequest = await fetch('/get/header.html');
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
  const headerHTMLRequest = await fetch('/get/statuscafe.html');
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector('#getstatuscafe').innerHTML = headerHTML;
})();
(async function () {
  const headerHTMLRequest = await fetch('/get/todolist.html');
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector('#gettodolist').innerHTML = headerHTML;
})();
(async function () {
  const headerHTMLRequest = await fetch('/get/lastfm.html');
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector('.lasfm').innerHTML = headerHTML;
})();
(async function () {
	const headerHTMLRequest = await fetch('/get/projectlink.html');
	const headerHTML = await headerHTMLRequest.text();
	document.querySelector('#projectLink').innerHTML = headerHTML;
})();
(async function () {
	const headerHTMLRequest = await fetch('/get/projimg.html');
	const headerHTML = await headerHTMLRequest.text();
	document.querySelector('.projectImg').innerHTML = headerHTML;
})();