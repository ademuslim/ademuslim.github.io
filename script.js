document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const homeSection = document.getElementById('home');

    // Retrieve theme mode from localStorage on page load
    const savedThemeMode = localStorage.getItem('themeMode');
    if (savedThemeMode) {
        document.body.classList.add(savedThemeMode);
        updateThemeButtonText(savedThemeMode);
    }

    window.addEventListener('scroll', function () {
        const distanceFromTop = window.scrollY;

        if (distanceFromTop >= 350) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    // Fungsi untuk mengubah tampilan SVG setelah 5 secon
    setTimeout(function() {
        document.getElementById('svg1').style.display = 'none';
        document.getElementById('svg2').style.display = 'block';
    }, 20000);
});

function toggleMenu() {
    var menu = document.getElementById('primary-menu');
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
}


// Fungsi untuk mengganti tema
function toggleLightMode() {
    const body = document.body;
    body.classList.toggle("light-mode");

    // Save theme mode to localStorage
    const themeMode = body.classList.contains("light-mode") ? "light-mode" : "";
    localStorage.setItem('themeMode', themeMode);

    // Update background image based on theme mode
    updateBackgroundImage(themeMode);

    updateThemeButtonText(themeMode);
}

// Mengganti teks atau simbol sesuai dengan status dark mode
function updateThemeButtonText(themeMode) {
    const themeModeElements = document.querySelectorAll(".theme-mode");

    themeModeElements.forEach(element => {
        if (themeMode === "light-mode") {
            element.innerHTML = "night";
        } else {
            element.innerHTML = "day";
        }
    });
}

// Fungsi untuk mengganti gambar latar belakang sesuai dengan tema
function updateBackgroundImage(themeMode) {
    const animatedBackground = document.querySelector(".animated-background");

    if (themeMode === "light-mode") {
        animatedBackground.style.backgroundImage = "url(dark-back.png)";
    } else {
        animatedBackground.style.backgroundImage = "url(light-back.png)";
    }
}

// Loading screen
document.addEventListener("DOMContentLoaded", function () {
    // Menampilkan elemen loading
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "flex";

    // Menunggu beberapa detik (simulasi loading)
    setTimeout(function () {
        // Menyembunyikan elemen loading
        loadingScreen.style.display = "none";

        // Menampilkan elemen konten utama
        var content = document.getElementById("content");
        content.style.display = "inline-block";
    }, 3000); // Ubah angka ini sesuai dengan durasi simulasi loading (dalam milidetik) default 8000
});


const button = document.querySelector('.button');
const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

button.addEventListener('click', () => {
    button.classList.toggle('-mobile-menu-open');
    menu.classList.toggle('-open');

    // Tambahkan class pada nav untuk mengatur warna melalui CSS
    nav.classList.toggle('-mobile-menu-open', button.classList.contains('-mobile-menu-open'));
});





