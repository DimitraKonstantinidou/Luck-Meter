const urlParams = new URLSearchParams(window.location.search);
const luckScore = parseInt(urlParams.get('score'));

document.getElementById("luckScore").innerHTML= "Your luck score is " + luckScore + "%";

let message;

if (luckScore <= 35) {
    message = "Well, you can't win 'em all! Better luck next time!";
} else if (luckScore > 35 && luckScore <= 75) {
    message = "Not too shabby! You're walking on the sunny side of life!";
} else {
    message = "Wowza! You must have a four-leaf clover tucked away somewhere!";
}
 document.getElementById("message").innerHTML = message

 function goToFirstPage() {
    window.location.href = "index.html";
  }

  if (performance.getEntriesByType("navigation")[0].type === "reload") {
    window.location.href = 'index.html'
}