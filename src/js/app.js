$( () => {
  const title = $('#title');
  const header = $('#header');
  const navBar = $('#fixed');
  const hamburger = $('#hamburger');
  const borderElement = $('.border');
  const article = $('#content1');
  const arrows = $('#arrow-container');
  let lastScrollTop = 0;



  const detectElement = function(el,position = "top",delay = 0) {

    if ( !(position === "top" || position === 'bottom' || position === 'center') ){
      position = 'top';
      throw "position top ,center, bottom. Set to top";

    }
    let elementTop = el.offset().top;
    let elementBottom = elementTop + el.outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    switch (position) {
      case "top":
        return elementTop < viewportBottom - delay;

      case 'center':
        return (elementTop - el.outerHeight()/2) < viewportBottom - delay;

      case 'bottom':
        return elementBottom < viewportBottom - delay
    }
  };






  function scroll() {
    let scrollTop = $(this).scrollTop();
    let st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // downscroll code
      title.addClass("pinned");
      header.addClass('scrolled');

      if ( scrollTop >= (header.height() - (title.find('pre').height() * 1.5 ))){
        navBar.addClass('scrolled');
        title.addClass('scrolled');
        hamburger.addClass('scrolled');

      }
      if (scrollTop > header.height()/2){
        borderElement.addClass("scrolled")
      }
      if (detectElement(article,'bottom',100)){
        article.find('p').addClass('scrolled')
      }
      if(detectElement(arrows,'middle')){
        arrows.css('visibility','visible')
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
      if (!detectElement(article,'bottom',100)){
        article.find('p').removeClass('scrolled')
      }

    }
    lastScrollTop = st;

  }


  $(document).on('scroll',scroll)



});
