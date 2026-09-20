let pin = "";
const correct = "1806";
const music = document.getElementById("music");

function press(num) {
  if (pin.length >= 4) return;
  
  pin += num;
  document.getElementById("dots").innerText = "●".repeat(pin.length) + "○".repeat(4 - pin.length);

  if (pin.length === 4) {
    if (pin === correct) {
      // PIN benar
      document.getElementById("pin-screen").style.display = "none";
      document.getElementById("page1").classList.add("active");

      // Putar musik setelah PIN benar
      playMusic();
    } else {
      // PIN salah
      alert("PIN salah! coba lagi");
      pin = "";
      document.getElementById("dots").innerText = "○○○○";
    }
  }
}

function playMusic() {
  music.volume = 0.75;
  music.play().catch(() => {
    // Kalau browser blokir autoplay, tunggu user klik sekali
    const unlock = () => {
      music.play();
      document.body.removeEventListener("click", unlock);
    };
    document.body.addEventListener("click", unlock);
  });
}

function nextPage(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + n).classList.add("active");
  }
