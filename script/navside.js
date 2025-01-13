function openNav() {
  var sidebar =  document.getElementById("sidebar");
  console.log(sidebar);
   sidebar.style.width = "75px";
   sidebar.style.height ="100%";
  }
  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
  

}
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

document.querySelectorAll('.responsive').forEach(el => {
  observer.observe(el);
  const headerport = document.getElementById('headerport');
  const hideport = document.getElementById('hideport');
  
  // Menambahkan event listener untuk mengelola klik
  headerport.addEventListener('click', function(e) {
      e.preventDefault(); // Mencegah link untuk melakukan navigasi
      hideport.classList.toggle('show'); // Toggle kelas show untuk menampilkan atau menyembunyikan submenu
  });
  
  // Menangani klik pada link di dalam submenu
  hideport.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(e) {
          // Jika ingin melakukan navigasi setelah mengklik link, bisa menghilangkan preventDefault
          // Jika ingin tetap mencegah navigasi, uncomment baris berikut:
          // e.preventDefault(); 
  
          // Arahkan ke halaman baru
          window.location.href = this.href; // Menggunakan href dari link yang diklik
      });
  });
});

    

