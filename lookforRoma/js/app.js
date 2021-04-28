
 $('.first-slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.scnd-slick'
});
$('.scnd-slick').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.first-slick',
  dots: true,
  centerMode: false,
  focusOnSelect: true
});