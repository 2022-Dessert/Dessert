$(function () {
  (dep1 = 04), (dep2 = 01);

  // sub2_num 변수가 있을때 ( 3차메뉴 )
  dep3 = "";

  if (dep1 == 2) {
    $("#contentInfoCon").css("display", "none");
    $(".pc-sub-menu").addClass("menu-move");
  }

  //메뉴 클릭시 스크롤 효과
  $(".menu-move li a").click(function () {
    var goDiv =
      $($(this).attr("data-target")).offset().top - $("#header").height();
    $("html, body").animate({ scrollTop: goDiv }, 600, "swing");
  });
});

$(document).ready(function () {
  $("#visual").addClass("sub");
});

$(window).load(function () {
  $("#visual").addClass("active");
});
