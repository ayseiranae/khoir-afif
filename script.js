function bukaUndangan() {
  const amplop = document.getElementById("amplop");
  amplop.classList.add("fade-out");

  setTimeout(() => {
    amplop.style.display = "none";
    document.body.classList.remove("lock-scroll");

    const music = document.getElementById("bg-music");
    music.play();
    // Tambahkan semua animasi secara bersamaan
    document.querySelector(".bride-groom")?.classList.add("animate");
    document.querySelector(".subtitle")?.classList.add("animate");
    document.querySelector(".wedding-date")?.classList.add("animate");

    document
      .querySelector("section.hero")
      .scrollIntoView({ behavior: "smooth" });
  }, 1000);
}

// Optional: isi nama tamu dari URL (seperti "?to=Mb Choir")
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const to = urlParams.get("to");
  if (to) {
    document.getElementById("namaTamu").innerText = decodeURIComponent(to);
  }
});

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("lock-scroll");

  const urlParams = new URLSearchParams(window.location.search);
  const to = urlParams.get("to");
  if (to) {
    document.getElementById("namaTamu").innerText = decodeURIComponent(to);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("fall-container");
  const maxItems = 5; // Maksimal elemen aktif
  const delayBetween = 2000; // Waktu antar jatuhan (ms)

  function createFallingItem() {
    const existingItems = document.querySelectorAll(".falling-item");
    if (existingItems.length >= maxItems) return; // Batasi maksimal 5 elemen
    if (existingItems.length >= maxItems) {
      // Cek lagi nanti, tunggu 1 detik
      setTimeout(createFallingItem, 1000);
      return;
    }

    const container = document.getElementById("fall-container"); // Pastikan container sudah didefinisikan
    const item = document.createElement("div");
    item.classList.add("falling-item");

    // Ganti emoji dengan gambar
    const img = document.createElement("img");
    img.src = "elements/fall-flower.png"; // Ganti dengan path gambar yang sesuai
    img.alt = "🌸"; // Alternatif teks jika gambar tidak tampil
    img.style.width = "50px"; // Atur lebar gambar sesuai kebutuhan
    img.style.height = "auto"; // Biarkan tinggi disesuaikan dengan lebar gambar

    item.appendChild(img);

    // Atur posisi random dari kiri layar
    item.style.left = Math.random() * 100 + "vw";
    item.style.animationDuration = "15s"; // Durasi animasi

    container.appendChild(item);

    // Hapus elemen setelah selesai animasi
    setTimeout(() => {
      item.remove();
    }, 12000); // Hapus sesuai durasi animasi
    setTimeout(createFallingItem, delayBetween);
  }

  // Buat elemen baru tiap 300ms
  createFallingItem();
});

const targetDate = new Date("2025-06-08T00:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = Math.max(
    0,
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = Math.max(
    0,
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerText = seconds
    .toString()
    .padStart(2, "0");
};

document.addEventListener("DOMContentLoaded", function () {
  const intro = document.querySelector(".verse-content");
  const children = intro.children;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Array.from(children).forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.5}s`;
          });

          requestAnimationFrame(() => {
            intro.classList.add("verse-visible");
          });

          observer.unobserve(intro);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(intro);
});

setInterval(updateCountdown, 1000);
updateCountdown();

document.addEventListener("DOMContentLoaded", function () {
  const intro = document.querySelector(".intro-content");
  const children = intro.children;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Tambahkan class utama
          intro.classList.add("intro-visible");

          // Animasi satu per satu dengan delay
          Array.from(children).forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.5}s`; // jeda 0.5s per elemen
          });

          observer.unobserve(intro);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(intro);
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".flip-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const card = entry.target;
        if (card.classList.contains("flip")) return;

        if (card.dataset.flip === "left") {
          card.classList.add("flip-left");
        } else {
          card.classList.add("flip-right");
        }

        observer.unobserve(card);
      });
    },
    { threshold: 0.5 }
  );

  cards.forEach((card, index) => {
    // Card ke-2 (index 1) flip kiri
    if (index === 1) {
      card.dataset.flip = "left";
    }
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const intro = document.querySelector(".doa-card");
  const children = intro.children;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Array.from(children).forEach((el, i) => {
            el.style.transitionDelay = `${i * 0.5}s`;
          });

          requestAnimationFrame(() => {
            intro.classList.add("doa-visible");
          });

          observer.unobserve(intro);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(intro);
});

document.getElementById("transfer-dana").addEventListener("click", function () {
  document.getElementById("transfer-info").textContent =
    "Please transfer your gift to Dana account: 082324669606";
});

document
  .getElementById("transfer-rekening")
  .addEventListener("click", function () {
    document.getElementById("transfer-info").textContent =
      "Please transfer your gift to Bank Account: BRI 5945-0103-2316-537 a/n Khoiriyah";
  });
