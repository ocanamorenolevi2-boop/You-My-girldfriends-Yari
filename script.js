
const correctPassword = "14/07/2022/2/11/2023";
let yesScale = 1;

const music = document.getElementById("music");
const voice = document.getElementById("voice");

music.volume = 1;
voice.volume = 1;

function startAudio() {
  music.play();
  setTimeout(() => {
    music.volume = 0.3;
    voice.play();
  }, 30000);
}

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === correctPassword) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
    startAudio();
  } else {
    document.getElementById("error").innerText = "Contraseña incorrecta 😢";
  }
}

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseenter", () => {
  noBtn.style.position = "relative";
  noBtn.style.left = Math.random() * 200 - 100 + "px";
});

noBtn.addEventListener("click", () => {
  document.getElementById("noMsg").classList.remove("hidden");
  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
  document.getElementById("final").classList.remove("hidden");
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});
