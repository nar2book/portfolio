$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

// Background slideshow (フェード切替)←結局使ってない
document.addEventListener('DOMContentLoaded', function() {
  const slides = Array.from(document.querySelectorAll('#bg-slideshow .slide'));
  if (!slides.length) return;
  let idx = 0;
  slides[idx].classList.add('active');
  const interval = 6000; // ミリ秒：各スライドの表示時間
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, interval);
});
