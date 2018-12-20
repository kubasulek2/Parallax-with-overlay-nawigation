$( () => {
  let scrollPosition;
  const title = $('#title');
  const header = $('#header');
  const navBar = $('#fixed');
  const hamburger = $('#hamburger');
  const borderElement = $('.border');
  let lastScrollTop = 0;
  let titleTop = title.offset().top + title.height()/2;



  function scroll() {
    let scrollTop = $(this).scrollTop();
    let st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      title.addClass("pinned");
      header.addClass('headerScroll');

      if ( scrollTop >= (header.height() - (title.find('pre').height() * 1.5 ))){
        navBar.addClass('scrolled');
        title.addClass('scrolled');
        hamburger.addClass('scrolled');

      }
      if (scrollTop > header.height()/2){
        borderElement.addClass("scrolled")
      }
    } else{
      if ( scrollTop <= header.height()){
        navBar.removeClass('scrolled');
        title.removeClass('scrolled');
        hamburger.removeClass('scrolled');
      }
      if (scrollTop < 100){
        title.removeClass("pinned");
        header.removeClass('headerScroll');
      }
      if(scrollTop < header.height()/2){
        borderElement.removeClass("scrolled")
      }

    }
    lastScrollTop = st;

  }


  $(document).on('scroll',scroll)



});
