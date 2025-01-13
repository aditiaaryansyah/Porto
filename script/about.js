function scrollToSection(selector) {
    console.log('Scrolling to:', selector);  // Debugging
    const section = document.querySelector(selector);
    if (section) {
        const offset = 0;  // Offset dari bagian atas viewport
        const elementPosition = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'  // Scroll dengan animasi halus
        });
    } else {
        console.error('Section not found:', selector);  // Jika selector tidak ditemukan
    }
}

let lastScrollTop = 0 ;
const navbar = document.querySelector('.NavBar');
window.addEventListener('scroll', function(){
    let currentScroll = window.pageYOffset || document.documentElement.scroollTop;
    if (currentScroll> lastScrollTop){navbar.classList.add('NavBar-hidden');

    }else{
        navbar.classList.remove('NavBar-hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

function isElementInViewport(el){
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom  <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=  (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.getElementById('contac-btn').addEventListener('click', function() {
    // Ambil semua elemen dengan class 'side-desc'
    const sideDescElements = document.querySelectorAll('.side-desc');

    // Toggle visibilitas setiap elemen
    sideDescElements.forEach(element => {
        if (element.classList.contains('show')) {
            element.classList.remove('show');
            this.textContent = 'Show All'; // Ubah teks tombol ketika menyembunyikan
        } else {
            element.classList.add('show');
            this.textContent = 'Hide All'; // Ubah teks tombol ketika menampilkan
        }
        //script ketika penguna klik btn  CLick Me , akan memunculkan teks
    });
});



function animateElements(){
    const elements = document.querySelectorAll('.rectangle-child');
    elements.forEach(element => {
         if(isElementInViewport(element)){
            element.classList.add('animate');
         }else{
            element.classList.remove('animate');
        }
    });
}
window.addEventListener('load', function() {
    const images = document.querySelectorAll('.portofolio img');
    images.forEach((img) => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    }); //script ini untu membuat animasi ketika penguna mausk ke dalam class , animasi akan berjalan masuk dan kembali menghilang ketika pengguna keluar class tersebutt
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            //  class 'active' untuk animasi ,
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 200); // waktu delay  untuk membuat muncul berurutan
        }
    });
});

// Mengamati setiap elemen dengan class 'responsive'
document.querySelectorAll('.responsive, .img, .cntntxt').forEach(el => {
    observer.observe(el);

    document.addEventListener("DOMContentLoaded", function () {
        // Memilih elemen yang akan diamati
        const elementsToAnimate = document.querySelectorAll('.contact-text, .cont-desc h3, .cont-desc p');
      
        // inisialisasi Intersection Observer
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {

              // untuk Menambahkan kelas 'slide-in' dengan sedikit delay untuk efek berurutan
              setTimeout(() => {
                entry.target.classList.add('slide-in');
              }, index * 200); // mengatur waktu delay dari setiap element
              observer.unobserve(entry.target); // observer akan berrhenti ketika animasi  berhenti erjalan
            }
          });
        }, {
          threshold: 0.1 // Memicu animasi saat 10% elemen terlihat
        });
      
        // Mengamati setiap elemen
        elementsToAnimate.forEach((el) => {
          observer.observe(el);
        });
      });
    });
      //untuk menghilangkan  dari layar utama jika css display none tidak berfungsi
      let slideIndex = [1, 1, 1, 1]; // satu  index , masing masing galery 
      let modalId = ["modal0", "modal1", "modal2","modal3"];
      let modalSlides = [
          document.querySelectorAll("#modal0 .mySlides"),
          document.querySelectorAll("#modal1 .mySlides"),
          document.querySelectorAll("#modal2 .mySlides"),
          document.querySelectorAll("#modal3 .mySlides"),
      ];
  // Berfungsi untuk membuka modal
      function openModal(index) {
          document.getElementById(modalId[index]).style.display = "block";
          showSlides(slideIndex[index], index);
      }
  // berfungsi untuk menutup modal
      function closeModal(index) {
          document.getElementById(modalId[index]).style.display = "none";
      }
  // berfungsi untuk menggeser slide
      function plusSlides(n, modalIndex) {
          showSlides(slideIndex[modalIndex] += n, modalIndex);
      }
  // Fungsi untuk menampilkan slide
      function showSlides(n, modalIndex) {
          let i;
          let slides = modalSlides[modalIndex];
          if (n > slides.length) { slideIndex[modalIndex] = 1 }
          if (n < 1) { slideIndex[modalIndex] = slides.length }
          for (i = 0; i < slides.length; i++) {
              slides[i].classList.remove('active-slide');
          }
          slides[slideIndex[modalIndex] - 1].classList.add('active-slide');
      }
    



window.addEventListener('scroll',animateElements);
window.addEventListener('resize', animateElements);
window.addEventListener('DOMContentLoaded',animateElements);