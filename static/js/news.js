$(function(){

    var $header = $('header'); //헤더를 변수에 넣기
    var $page = $('#page-start'); //색상이 변할 부분

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
            $header.css('background-color','rgb(98, 62, 39)');

            $('.header div nav div div ul li a').css('color', '#F9F8EA');
            $('.header div nav div div a').css('color', '#F9F8EA');
        }
        
        else {

            $header.css('position','relative');
            $header.css('background','none');

            $('.header div nav div div ul li a').css('color', 'rgb(98, 62, 39)');
            $('.header div nav div div a').css('color', 'rgb(98, 62, 39)');
        }
    });
    
    $(document).ready(function(){

        $('#image').display = "block"; 

        $('#image').fadeIn('slow', function() {
            $('#image').toggleClass('.bg');
            $header.toggleClass('down');
        });

        $('.title').slideDown(1500, function() {
            $(this).css('color', '#F9F8EA');
        });
        
    });
});


function mOver(obj) {

    obj.style.backgroundColor = '#684745';
    obj.style.color = '#F9F8EA';

    $('td a').css('textDecoration', 'none');

    $(obj).find('a').css('color', '#F9F8EA');
    $(obj).find('td').css('color', '#F9F8EA');

}


function mOut(obj) {

    obj.style.backgroundColor = '#F9F8EA';
    obj.style.color = '#684745';

    $('td').css('color', '#684745');
    $('td a').css('color', '#684745');

}

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