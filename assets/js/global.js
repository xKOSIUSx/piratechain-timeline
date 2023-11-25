// reveal button to return to top of page
document.addEventListener("DOMContentLoaded", function() {
  let rtt = document.getElementById("return-to-top");    
  window.onscroll = function() {    
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    rtt.style.opacity = 1;
  } else { rtt.style.opacity = 0;}}
});

document.addEventListener("DOMContentLoaded", function() {
  var links = document.links;
  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
          links[i].target = '_blank';
          links[i].rel = 'noopener noreferrer';
  }
});