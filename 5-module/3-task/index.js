function initCarousel() {
  const carousel__inner = document.querySelector(".carousel__inner");
  const arrow_right = document.querySelector(".carousel__arrow_right");
  const arrow_left = document.querySelector(".carousel__arrow_left");

let position = 0;

  if (position === 0) {
    arrow_left.style.display = 'none';
  }


  function none() {
    if (position >= 1) {
      arrow_left.style.display = '';
   } else if (position === 0) {
     arrow_left.style.display = 'none';
   }
   
   if (position >= 3) {
     arrow_right.style.display = 'none';
   }
   else if (position < 3) {
     arrow_right.style.display = '';
   }
  }

  function right () {
    carousel__inner.style.transform += `translateX(${-carousel__inner.offsetWidth}px)`;
    position = position + 1;
    none()
  }
  function left () {
    carousel__inner.style.transform += `translateX(${carousel__inner.offsetWidth}px)`;
    position = position - 1;
    none()
  }

  arrow_right.addEventListener('click',right);
  arrow_left.addEventListener('click', left);

}





























































