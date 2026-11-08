
// ================================
// PINDAH HALAMAN
// ================================

function goTo(pageNumber) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  const targetPage = document.getElementById("page" + pageNumber);

  if (targetPage) {
    targetPage.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ================================
// CERITA DI HALAMAN MEMORIES
// ================================

const stories = {
  story: {
    tag: "A little memory",
    title: "Tempat-tempat kecil, cerita yang panjang",
    text: "Lucunya, kita nggak selalu butuh rencana besar untuk menghabiskan waktu bersama. Kadang cukup keluar buat beli jajanan, membawanya pulang ke kos, mencari kafe baru, mampir ke angkringan, atau sekadar mencoba tempat yang belum pernah kita datangi sebelumnya. Kelihatannya memang sederhana, bahkan mungkin nggak ada yang spesial dari semua itu. Tapi ada satu hal yang membuatnya berbeda, semua hal kecil itu jadi bagian dari cerita kita. Aku senang karena ternyata masih banyak hal sederhana yang bisa kita nikmati bersama. Dan aku harap, ini bukan cuma kumpulan cerita yang nantinya berhenti di sini. Masih banyak tempat yang belum kita datangi, makanan yang belum kita coba, dan pengalaman yang belum kita punya. Jadi, semoga kita masih diberi banyak kesempatan untuk membuat cerita-cerita baru lagi. Jangan cepat kehabisan waktu buat jalan bareng, ya. WKWK. ❤️"
  },

  coffee: {
    tag: "Coffee & books",
    title: "Kopi, buku, dan lambung",
    text: "Awalnya kita cuma mau mencari kafe yang punya buku, maklum, dua manusia yang sok kalem kalau sudah ketemu bacaan. Semuanya berjalan sesuai rencana, sampai seseorang tiba-tiba memutuskan untuk mencoba kopi. Dan hasilnya? Baru beberapa teguk, jantung sudah konser sendiri. Besoknya, lambung ikut menyusul dengan keluhan resmi. Hebat, satu gelas kopi berhasil membuat tubuhmu mengadakan rapat darurat selama dua hari. WKWK. Sepertinya kita perlu evaluasi agenda nongkrong berikutnya. Lain kali cukup baca buku tentang kopi aja, nggak perlu sampai mempraktikkannya. 😂 "
  },

  sleep: {
    tag: "Late night story",
    title: "Obrolan yang tinggal sebelah pihak",
    text: "Malam itu aku sedang menginap di kosmu. Sebelum tidur, kita sepakat untuk menaruh HP dan menghabiskan waktu dengan bercerita. Posisi sudah nyaman, sama-sama berbaring, lalu obrolan pun dimulai.Awalnya kita membahas satu hal, lalu tiba-tiba topiknya berbelok ke mana-mana. Aku tetap menanggapi, karena kupikir memang begitulah serunya ngobrol sebelum tidur. Tapi beberapa saat kemudian, suasana mendadak hening. Aku masih sempat bicara, sampai akhirnya sadar kalau tidak ada jawaban. Saat aku menoleh, ternyata kamu sudah lebih dulu masuk ke alam mimpi. Luar biasa. Aku kira kita sedang berbagi cerita, ternyata aku cuma sedang mengisi suara untuk tidurmu. Terima kasih sudah menjadikanku podcast pengantar tidur gratis. WKWKWK. 😂"
  },

  beach: {
    tag: "A trip to remember",
    title: "Perjalanan yang tidak terlupakan",
    text: "Katanya mau ke pantai, dan kebetulan kita punya hari libur yang sama. Tanpa banyak rencana, bermodalkan Google Maps dan nekat sedikit, berangkatlah kita menuju pantai beda provinsi. Perjalanan berangkat cukup seru, meskipun sesekali ada drama salah arah dan miskomunikasi antara pengemudi dan petugas navigasi. Kadang yang satu bingung jalan mana yang harus diambil, yang satu lagi juga sama-sama hilang arah. Tapi akhirnya sampai juga! Sayangnya, kejutan justru menunggu saat perjalanan pulang. Baru sekitar 20 menit jalan, kita bertemu tumpahan solar dan akhirnya sama-sama mencium aspal. Jauh-jauh ke pantai buat menikmati laut, pulangnya malah kenalan lebih dekat sama jalan raya. 😭 Sepertinya perjalanan ini memang nggak mau berakhir biasa saja. Semoga perjalanan berikutnya cukup membawa pulang foto dan cerita, bukan luka-luka. WKWK."
    }
    };

function openStory(key) {
  const story = stories[key];

  if (!story) return;

  document.getElementById("story-tag").textContent = story.tag;
  document.getElementById("story-title").textContent = story.title;
  document.getElementById("story-text").textContent = story.text;

  document.getElementById("story-modal").classList.add("show");
}

function closeModal() {
  document.getElementById("story-modal").classList.remove("show");
}


// ================================
// ARSIP TERAKHIR
// ================================

function unlockFinal() {
  goTo(4);
}


// ================================
// PILIHAN MAKANAN
// SEMUA HARUS DIBUKA
// ================================

const foodMessages = {
  cireng: {
    tag: "A little snack",
    title: "Cireng",
    text: "Dari sekian banyak jajanan, cireng jadi salah satu yang sering mengingatkanku sama kamu. Soalnya, entah sudah berapa kali kamu mengajakku berburu cireng dan jajanan lainnya. Tapi ada satu hal yang mau aku sampaikan semoga kamu tetap kuat menghadapi hari-hari yang nggak selalu mudah. Kalau hidup mulai terasa alot, ingatlah cireng saja bisa tetap nikmat meskipun harus melewati panasnya minyak WKWK. Tetap semangat, ya! Jangan lupa istirahat, makan yang cukup, dan sesekali traktir aku cireng lagi. 😂"
  },

  dimsum: {
    tag: "A little happiness",
    title: "Dimsum",
    text: "Katanya hidup itu seperti dimsum, kadang isinya kejutan, kadang juga bikin ketagihan WKWK. Semoga hari-harimu selalu punya banyak hal baik, sekecil apa pun itu. Kalau lagi capek, jangan lupa istirahat dan kasih diri sendiri sedikit kebahagiaan. Ingat, kamu juga perlu dirawat, bukan cuma dimsum yang dikukus. 😂❤️"
  },

  coffee: {
    tag: "A little reminder",
    title: "Coffee",
    text: "Hidup kadang memang pahit seperti kopi, tapi bukan berarti semuanya harus dihadapi sendirian. Semoga kamu selalu punya alasan untuk bangun dan menjalani hari, bahkan ketika semuanya terasa berat. Pelan-pelan saja, nggak perlu buru-buru. Tapi satu pesan penting jangan sok kuat minum kopi kalau ujung-ujungnya jantung dan lambung yang demo WKWK. ☕"
  },

  matcha: {
    tag: "A little calm",
    title: "Matcha",
    text: "Kalau kopi terlalu heboh buat jantungmu, mungkin matcha bisa jadi pilihan yang lebih bersahabat WKWK. Semoga di tengah hari-hari yang melelahkan, kamu selalu punya waktu untuk berhenti sejenak dan menikmati hal-hal kecil yang bikin bahagia. Nggak harus selalu kuat, ya. Sesekali boleh istirahat dan manjakan diri. Hidup boleh sedikit pahit seperti matcha, tapi jangan sampai kamu kehilangan manisnya. 🍵"
  }
};

const openedFoods = new Set();

function openFood(key) {
  const food = foodMessages[key];

  if (!food) return;

  document.getElementById("food-tag").textContent = food.tag;
  document.getElementById("food-title").textContent = food.title;
  document.getElementById("food-text").textContent = food.text;

  document.getElementById("food-modal").classList.add("show");

  // Tandai pilihan yang sudah dibuka
  openedFoods.add(key);

  const selectedCard = document.querySelector(
    `[data-food="${key}"]`
  );

  if (selectedCard) {
    selectedCard.classList.add("opened");
  }

  updateFoodProgress();
}

function closeFoodModal() {
  document.getElementById("food-modal").classList.remove("show");
}


// ================================
// PROGRESS MEMBUKA 4 PILIHAN
// ================================

function updateFoodProgress() {
  const total = 4;
  const opened = openedFoods.size;

  document.getElementById("food-count").textContent =
    opened + " / " + total;

  document.getElementById("food-progress").style.width =
    (opened / total) * 100 + "%";

  // Aktifkan tombol surat setelah semua pilihan dibuka
  const letterButton = document.getElementById("letter-btn");

  if (opened === total) {
    letterButton.disabled = false;
    letterButton.classList.add("enabled");

    const bonus = document.getElementById("bonus");

    if (bonus) {
      bonus.classList.add("show");
    }
  }
}


// ================================
// TUTUP MODAL KETIKA KLIK LUAR
// ================================

document.addEventListener("click", function (event) {
  const storyModal = document.getElementById("story-modal");
  const foodModal = document.getElementById("food-modal");

  if (event.target === storyModal) {
    closeModal();
  }

  if (event.target === foodModal) {
    closeFoodModal();
  }
});


// ================================
// TUTUP MODAL DENGAN TOMBOL ESC
// ================================

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
    closeFoodModal();
  }
});


// ================================
// BACKGROUND MUSIC
// ================================

const backgroundMusic = document.getElementById("background-music");
const musicButton = document.getElementById("music-button");
const musicIcon = document.getElementById("music-icon");
const musicLabel = document.getElementById("music-label");

async function toggleMusic() {
  if (backgroundMusic.paused) {
    try {
      await backgroundMusic.play();

      musicButton.classList.add("playing");
      musicIcon.textContent = "♫";
      musicLabel.textContent = "Pause Music";

    } catch (error) {
      musicLabel.textContent = "Try Again";
      console.log("Musik gagal diputar:", error);
    }

  } else {
    backgroundMusic.pause();

    musicButton.classList.remove("playing");
    musicIcon.textContent = "♫";
    musicLabel.textContent = "Play Music";
  }
}


/* =================================
   PAGE 07 — BIRTHDAY FINALE
================================= */

function blowCandles() {
  const flame1 = document.getElementById("flame1");
  const flame2 = document.getElementById("flame2");
  const wishButton = document.getElementById("wishButton");
  const wishInstruction = document.getElementById("wishInstruction");
  const finalMessage = document.getElementById("finalMessage");

  // Cegah tombol ditekan berulang kali
  if (!flame1 || !flame2 || wishButton.disabled) {
    return;
  }

  wishButton.disabled = true;

  // Padamkan kedua api lilin
  [flame1, flame2].forEach(flame => {
    flame.style.opacity = "0";
    flame.style.transform = "translateX(-50%) scale(0)";
  });

  // Ubah instruksi
  wishInstruction.textContent =
    "Semoga semua harapan baikmu menemukan jalannya. 🤍";

  // Hilangkan tombol
  wishButton.style.opacity = "0";
  wishButton.style.pointerEvents = "none";

  // Tampilkan pesan terakhir
  setTimeout(() => {
    finalMessage.classList.add("show");
  }, 900);
}
