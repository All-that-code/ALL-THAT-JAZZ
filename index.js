function userInfo() {
  let name = prompt("What is your name");
  let email = prompt("What is your email?");
  let music = prompt("Do you like music?");
  music = music.toLowerCase();
  music = music.trim();
  if (music === "yes") {
    alert(
      `Thanks ${name}, there is a playlist link waiting for you on your inbox!`
    );
  } else {
    alert(`You do not like music, ${name}? You must be a robot! 🤖`);
  }
}
let buttonGetPlay = document.querySelector("button");
buttonGetPlay.addEventListener("click", userInfo);
