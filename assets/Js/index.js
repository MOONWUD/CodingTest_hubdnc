/*========== nav */
$('nav .nav_wrapper li').on('click', (e) => {
  $('nav .nav_wrapper li').removeClass('show');
  $(e.currentTarget).addClass('show')
 });



/*========== category */
/*===== scroll Event  */
let scroll = 5;
$(window).on('scroll', (e) => {
  let windowScroll = $(e.target).scrollTop();
  if (windowScroll > scroll) {
    $('.category').addClass('active');
  } else {
    $('.category').removeClass('active');
  }
})

/*===== slide btn */





/*========== competition */
 let $competitionNavBtn = $('.competition .competitionNav_wrapper li');
 let currentIdx = 0;

 $competitionNavBtn.on('click', (e) => {
   const idx = $(e.currentTarget).index();

   $('.youtuber_container').stop().animate({
     marginLeft: -100 * idx + '%'
   }, 1000);

   $competitionNavBtn.removeClass('show');
   $(e.currentTarget).addClass('show');
   
   currentIdx = idx;
 })



/*========== popularVideo */
/*===== moreBtn */
$('.popularVideo .more_container .moreBtn_wrapper').on('click', () => {
  $('.popularVideo .moreBox').show();
});
