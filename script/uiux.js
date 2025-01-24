let slideIndex = [1,1,1];
let modalId = ["uiux0" , "uiux1","uiux2"];
let modalSlides = [
    document.querySelectorAll("#uiux0 .mySlides"),
    document.querySelectorAll("#uiux1 .mySlides"),
    document.querySelectorAll("#uiux2 .mySlides"),
];

function openModal(index){
    document.getElementById(modalId[index]).style.
    display = "block";
    showSlides(slideIndex[index],index);
}

function closeModal(index){
    document.getElementById(modalId[index]).style.
    display = "none";
}

function plusSlides(n, modalIndex) {
    showSlides(slideIndex[modalIndex] += n, modalIndex);
}
// Fungsi untuk menampilkan slide
function showSlides(n, modalIndex)  {
    let i;
    let slides = modalSlides[modalIndex];
    if (n > slides.length) { slideIndex[modalIndex] = 1 }
    if (n < 1) { slideIndex[modalIndex] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active-slide');
    }
    slides[slideIndex[modalIndex] - 1].classList.add('active-slide');
}