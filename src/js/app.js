$( () => {
  const title = $('#title');
  const header = $('#header');
  const navBar = $('#fixed');
  const hamburger = $('#hamburger');
  const borderElement = $('.border');
  const article = $('#content1');
  let lastScrollTop = 0;


  const detectBottom = function(el) {
    let elementTop = el.offset().top;
    let elementBottom = elementTop + el.outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom < viewportBottom - 100
  };





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
      if (detectBottom(article)){
        article.find('p').addClass('scrolled')
      }
    } else{
      // upscroll code

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
      if (!detectBottom(article)){
        article.find('p').removeClass('scrolled')
      }

    }
    lastScrollTop = st;

  }


  $(document).on('scroll',scroll)



});
