const btnRead = document.getElementById('btn-read');

$('.reviews-video').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  btnRead.onclick = function(){
    btnRead.classList.add('d-none');
    document.getElementById('text-read').classList.remove('d-none')
  }