$(()=>{const e=$("#title"),o=$("#header"),s=$("#fixed"),t=$("#hamburger"),l=$(".border"),r=$("#content1"),n=$("#arrow-container"),a=$("#footer"),d=$(".menu"),i=$(".menu-line"),c=$(".item");let m=0,h=1;t.on("click",function(){d.addClass("show"),setTimeout(function(){i.addClass("show")},305),setTimeout(function(){!function(){const e=setInterval(function(){h>=10&&clearInterval(e),c.each(function(e,o){o.className===`item item-${h}`&&$(o).addClass("show")}),h++},100)}()},510)});const u=function(e,o="top",s=0){if("top"!==o&&"bottom"!==o&&"center"!==o)throw o="top","position top ,center, bottom. Set to top";let t=e.offset().top,l=t+e.outerHeight(),r=$(window).scrollTop()+$(window).height();switch(o){case"top":return t<r-s;case"center":return t+e.outerHeight()/2<r-s;case"bottom":return l<r-s}};$(document).on("scroll",function(){let d=$(this).scrollTop(),i=$(this).scrollTop();i>m?(e.addClass("pinned"),o.addClass("scrolled"),d>=o.height()-1.5*e.find("pre").height()&&(s.addClass("scrolled"),e.addClass("scrolled"),t.addClass("scrolled")),d>o.height()/2&&l.addClass("scrolled"),u(r,"bottom",100)&&r.find("p").addClass("scrolled"),u(n,"center",-100)&&(n.css("visibility","visible").find("#arrows").addClass("animate"),setTimeout(function(){$("#arrows").removeClass("animate")},1550)),u(a,"center")&&a.addClass("scrolled")):(d<=o.height()&&(s.removeClass("scrolled"),e.removeClass("scrolled"),t.removeClass("scrolled")),d<100&&(e.removeClass("pinned"),o.removeClass("scrolled")),d<o.height()/2&&l.removeClass("scrolled"),u(r,"bottom",200)||r.find("p").removeClass("scrolled"),u(a,"bottom")||a.removeClass("scrolled")),m=i})});
//# sourceMappingURL=app.js.map
