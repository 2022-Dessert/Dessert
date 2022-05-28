$(function(){
    var $header = $('header'); //헤더를 변수에 넣기
    var $page = $('.page-start'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
    

    $header.css('background-color','#F9F8EA');
    $('container').css('background-color','#F9F8EA');
    $('body').css('background-color','#F9F8EA');


    $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
        pageOffsetTop = $page.offset().top;
    });

    $window.on('scroll', function(){ //스크롤시
        var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
        $header.toggleClass('down', scrolled); //클래스 토글
        if(($header).hasClass('down') === true){
            $header.css('position','fixed');
            $header.css('background-color','rgba(0,0,0,.8)');
            
        }
        else {
            $header.css('position','relative');
        }
    });
    
    $(document).ready(function(){
        $('.title').slideDown(1200, function() {
            $(this).css('color', '#F9F8EA');
        });


        // table row 다 바뀌는거 수정하기,,,,,,
        $('.data').mouseover(function(){
            $(this && 'td').css('color', '#F9F8EA');
            $(this).css('backgroundColor','#684745');
            $('td a').css('color', '#F9F8EA');
            $('td a').css('textDecoration', 'none');

         });
 
         $('.data').mouseout(function(){
            $('td').css('color', '#684745');
            $(this).css('backgroundColor','#F9F8EA');
            $('td a').css('color', '#684745');

         });

    });

    
});


function count(num)  {
  // 결과를 표시할 element
  const resultElement = document.getElementsByClassName('result');
  
  // 현재 화면에 표시된 값
  var number = resultElement[num].innerText;
  
  // 더하기
  number = parseInt(number) + 1;
 
  // 결과 출력
  resultElement[num].innerText = number;
}


$(document).ready(function(){
	var height =  $(".notice").height();
	var num = $(".rolling li").length;
	var max = height * num;
	var move = 0;

	function noticeRolling(){
		move += height;

		$(".rolling").animate({"top":-move},600,function(){
			if( move >= max ){
				$(this).css("top",0);
				move = 0;
			};
		});
	};

	noticeRollingOff = setInterval(noticeRolling,1500);
	$(".rolling").append($(".rolling li").first().clone());

});		