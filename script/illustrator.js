let slideIndex = [1,1,1,1]; // satu  index , masing masing galery 
      let modalId = ["ilutmdl0", "ilutmdl1", "ilutmdl2" , "ilutmdl3"];
      let modalSlides = [
          document.querySelectorAll("#ilutmdl0 .mySlides"),
          document.querySelectorAll("#ilutmdl1 .mySlides"),
          document.querySelectorAll("#ilutmdl2 .mySlides"),
          document.querySelectorAll("#ilutmdl3 .mySlides")
        
      ];
  // Berfungsi untuk membuka modals
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