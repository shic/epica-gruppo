const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// services box
const boxViews = document.querySelectorAll(".services-box"),
  boxBtns = document.querySelectorAll(".services-button"),
  boxCloses = document.querySelectorAll(".services-box-close");

let box = function (boxClick) {
  boxViews[boxClick].classList.add("active-box");
};

boxBtns.forEach((boxBtn, i) => {
  boxBtn.addEventListener("click", () => {
    box(i);
  });
});

boxCloses.forEach((boxClose) => {
  boxClose.addEventListener("click", () => {
    boxViews.forEach((boxView) => {
      boxView.classList.remove("active-box");
    });
  });
});

// change bg header
function scrollHeader() {
  const nav = document.getElementById("home");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// scroll to top
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Cookie Consent
const cookiePopup = document.getElementById('cookie-popup');
const acceptBtn = document.getElementById('cookie-accept');
const rejectBtn = document.getElementById('cookie-reject');
const manageBtn = document.getElementById('cookie-manage');

if (cookiePopup && !localStorage.getItem('cookieConsent')) {
  setTimeout(() => {
    cookiePopup.classList.add('show');
  }, 1000);
}

if (acceptBtn) {
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookiePopup.classList.remove('show');
  });
}

if (rejectBtn) {
  rejectBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    cookiePopup.classList.remove('show');
  });
}

if (manageBtn) {
  manageBtn.addEventListener('click', () => {
    alert("Funzionalità 'Gestisci preferenze' in arrivo.");
  });
}
