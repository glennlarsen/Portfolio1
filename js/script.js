
  //Image Modal//      
  const image = document.querySelectorAll("img");
  const modal = document.querySelector(".modal");
  const modalImage = document.querySelector(".modal-image");
  const caption = document.querySelector(".caption");
  const Close = document.querySelector(".close");

  //Open modal//
  for (let i = 0; i < image.length; i++) {
    image[i].onclick = function () {
      modal.style.display = "block";
      modalImage.src = this.src;
      caption.innerHTML = this.alt;
    }
  }

  //Close Modal//
  modal.onclick = ("click", (e) => {
    if (e.target.classList.contains("modal")) {
      modal.style.display = "none";
    }
  });

  Close.onclick = function () {
    modal.style.display = "none";
  }

  const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

overlay.onclick = ("click", (e) => {
    if(e.target.classList != contains("overlay")) {
        this.classList.toggle("close");
    }
});