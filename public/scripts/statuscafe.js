// status.cafe script obviously made by status.cafe, i modified it to my liking
document.writeln('<div id="statuscafe-username"></div><div id="statuscafe-content"></div></div>');
fetch("https://status.cafe/users/eliteproot784/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "empty thought"
      return
    }
    document.getElementById("statuscafe-username").innerHTML = '<a href="https://status.cafe/users/eliteproot784" target="_blank">' + r.author + '</a> ' + "says:"
    document.getElementById("statuscafe-content").innerHTML = r.content
    document.getElementById("statuscafe-timeAgo").innerHTML = ' (' + r.timeAgo + ')'
  })