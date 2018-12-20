$( () => {
  let scrollPosition;
  const title = $('#title');
  const container = $('#header');
  let lastScrollTop = 0;
  let titleTop = title.offset().top + title.height()/2;



  function scroll() {
    let scrollTop = $(this).scrollTop();
    let st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      title.addClass("pinned")
    } else{
      title.removeClass("pinned")

    }
    lastScrollTop = st;

  }


  $(document).on('scroll',scroll)



});
