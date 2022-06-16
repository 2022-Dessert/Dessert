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

jQuery(function ($) {
  function getScrollBarWidth() {
    if ($(document).height() > $(window).height()) {
      $("body").append(
        '<div id="fakescrollbar" style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"></div>'
      );
      fakeScrollBar = $("#fakescrollbar");
      fakeScrollBar.append('<div style="height:100px;">&nbsp;</div>');
      var w1 = fakeScrollBar.find("div").innerWidth();
      fakeScrollBar.css("overflow-y", "scroll");
      var w2 = $("#fakescrollbar")
        .find("div")
        .html("html is required to init new width.")
        .innerWidth();
      fakeScrollBar.remove();
      return w1 - w2;
    }
    return 0;
  }

  $(window).scroll(function () {
    var scrollHeight = $(window).scrollTop();
    var startTop = $("#header").height();
    if (scrollHeight > startTop) {
      $("#header").addClass("fixed");
    } else {
      $("#header").removeClass("fixed");
    }
  });

  $(window).scroll(function () {
    var scrollHeight = $(window).scrollTop();
    var startTop = $("#visual").height() - $("#pcSubMenu").height();
    if (scrollHeight > startTop) {
      $("#pcSubMenu").addClass("fixed");
      $(".pc-submenu-wrap").addClass("fixed");
    } else {
      $("#pcSubMenu").removeClass("fixed");
      $(".pc-submenu-wrap").removeClass("fixed");
    }
  });

  $(".header-lang")
    .click(function () {
      $(this).toggleClass("open");
    })
    .mouseleave(function () {
      $(this).removeClass("open");
    });

  $(".header-search-box").each(function () {
    var $searchBox = $(this);
    var $openBtn = $(this).find(".header-search-open-btn");
    var $closeBtn = $(this).find(".header-search-close-btn");

    $openBtn.click(function () {
      $searchBox.addClass("open");
    });
    $closeBtn.click(function () {
      $searchBox.removeClass("open");
    });
  });

  $(".to-top-btn").each(function () {
    if ($(this).length > 0) {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
          $(".to-top-btn").addClass("fixed");
        } else {
          $(".to-top-btn").removeClass("fixed");
        }
      });
    }

    $(this).on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 600, "easeInOutExpo"); // easing �④낵 �ъ슜�섍린�꾪빐�쒕뒗 jquery.easing.1.3.js�� �꾩슂��, �놁쓣 �� 湲곕낯 "swing"
      return false;
    });
  });

  $(".family-site-box").each(function () {
    var $familyBox = $(this);
    var $familyListOpenBtn = $(this).children(".family-site-open-btn");
    var $familyList = $(this).children(".family-site-list");
    $familyListOpenBtn.click(function () {
      $familyList.slideToggle(500);
      $familyBox.toggleClass("open");
      return false;
    });
    $(this).mouseleave(function () {
      $familyList.slideUp(500);
      $familyBox.removeClass("open");
    });
  });

  $(".cm-tab-container").each(function () {
    var $cmTabList = $(this).children(".cm-tab-list");
    var $cmTabListli = $cmTabList.find("li");
    var $cmConWrapper = $(this).children(".cm-tab-content-wrapper");
    var $cmContent = $cmConWrapper.children(".cm-tab-con");

    var $selectCon = $cmTabList.find("li.selected").find("a").attr("href");
    $cmContent.hide();
    $($selectCon).show();

    $cmTabListli.children("a").click(function () {
      if (!$(this).parent().hasClass("selected")) {
        var visibleCon = $(this).attr("href");
        $cmTabListli.removeClass("selected");
        $(this).parent("li").addClass("selected");
        $cmContent.hide();
        $(visibleCon).fadeIn();
      }
      return false;
    });
  });

  $(".online-request-btn").click(function () {
    $("#onlineRequest").toggleClass("open");
    $(".footer-wrap").toggleClass("open");
  });
});
