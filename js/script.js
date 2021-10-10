
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
      console.log(caption);
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