
  $(document).ready(function(){
    $('.testimonial-carousel').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });


  document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const collapseElement = document.querySelector('#navbarCollapse');
    collapseElement.classList.toggle('show');
  });
