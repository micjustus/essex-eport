// Source for this code comes from : https://stackoverflow.com/questions/53039757/optimizing-javascript-for-auto-scroll-feature

function scrollspy() {
  window.setInterval(function () {
    autoscroll();
  }, 400);

  var elems = $(".scrollspy");
  var headers = {};
  var headers_pos = [];

  elems.each(function (index) {
    var pos = $(this).position().top - 70;
    var name = $(this).attr("name");

    const pos_str = Math.floor(pos);
    headers[pos_str] = name;
    headers_pos.push(pos_str);
  });

  headers_pos.sort(function (a, b) {
    return a - b;
  });

  var current_active = $("#table-of-contents a:first");
  current_active.addClass("active");

  function autoscroll() {
    console.log("called autoscroll");

    var scrollTop = $(window).scrollTop(),
      elementOffset = $("#toc-wrapper").offset().top,
      distance = Math.abs(elementOffset - scrollTop);

    var id;
    var last = $("#table-of-contents a:first").attr("href");

    headers_pos.forEach(function (index) {
      if (index > distance) {
        id = last;
        return;
      } else {
        last = "#" + headers[index];
      }
    });

    if (!id) {
      id = last;
    }

    var navElem = $('a[href="' + id + '"]');
    navElem.addClass("active");

    if (!current_active.is(navElem)) {
      current_active.removeClass("active");
    }

    current_active = navElem;

    var dft = navElem[0].getBoundingClientRect().top; // distance from top of viewport

    var s = $("#table-of-contents");
    if (dft > s.innerHeight() * 0.5 || dft < s.scrollTop()) {
      $("#table-of-contents").animate({
        scrollTop:
          navElem.offset().top -
          s.offset().top +
          s.scrollTop() -
          s.innerHeight() / 2,
        duration: 1,
        ease: "swing",
      });
    }
  }
}
