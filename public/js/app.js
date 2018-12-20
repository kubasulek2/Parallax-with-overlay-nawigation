$(()=>{const e=$("#title");$("#header");let o=0;e.offset().top,e.height();$(document).on("scroll",function(){$(this).scrollTop();let t=$(this).scrollTop();t>o?e.addClass("pinned"):e.removeClass("pinned"),o=t})});
//# sourceMappingURL=app.js.map
