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


/*===== slide drag */
  const slider = $(".comparisonTarget_wrapper");

  let x, left, down;

  slider.mousedown(function (e) {
    e.preventDefault();
    down = true;
    x = e.pageX;
    left = $(this).scrollLeft();
  });

  slider.mousemove(function (e) {
    if (down) {
      var newX = e.pageX;
      $(this).scrollLeft(left - newX + x);
    }
  });

  slider.mouseleave(function (e) {
    down = false;
  });

  slider.mouseup(function (e) {
    down = false;
  });


/*===== slide btn */


/*===== bookmark toggle btn */
$(".category .youtuberList_container .youtuberList_wrapper .comparisonTarget_container ul li .icon").on("click", function(e) {
  $(e.currentTarget).children().attr("src", function(index, attr){
    if(attr.match("bookmark_line")){
      return attr.replace("bookmark_line.png", "bookmark.png");
        } else{
          return attr.replace("bookmark.png", "bookmark_line.png");
      }
    });
  });
  $('.category .youtuberList_container .youtuberList_wrapper .comparisonTarget_container ul li .icon').on('click', (e) => {
    $(e.currentTarget).toggleClass('toggle');
  });


/*===== profile change toggle btn */
$('.category .youtuberList_container .youtuberList_wrapper .currentProfile_container').on('click', (e) => {
  $(".profileChange_wrapper").toggleClass('toggle');
});



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
