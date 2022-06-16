$(document).ready(function(){

    // radio check (custom 요소 체크)
    $('.fruits').css('display', 'none');
    $('#middleArea').css('display', 'none');


    var place = document.getElementsByClassName('check');
    place[3].style.display = 'none';

    // sheet 경우
    $('#vanila').click(function(){
        $('#circle').css('background-color', 'white');
    });

    $('#choco').click(function(){
        $('#circle').css('background-color', '#684745');
    });

    // size 경우
    $('#middle').click(function(){
        alert('This size costs 25,000 ₩.');
    });

    $('#large').click(function(){
        alert('This size costs 30,000 ₩.');
    });
   
    // fruit 선택의 경우
    $('#fruit_y').click(function(){
        place[3].style.display = 'block';
    });

    $('#fruit_n').click(function(){
        place[3].style.display = 'none';
    });

    var text = document.getElementById('text');
    text.style.display = 'none';

    // lettering 선택 경우
    $('#letter_y').click(function(){
        text.style.display = 'block';
    });

    $('#letter_n').click(function(){
        text.style.display = 'none';
    });
   
});

function reset(){

    alert('Successfully Reseted.');

    $("input:radio").attr("disabled", false);

    var sheet = document.getElementsByName('sheet');
    for(var i = 0; i < sheet.length; i++){
        if(sheet[i].getAttribute('type') === 'radio') {
            sheet[i].checked = false;
        }
    }

    var fruit = document.getElementsByName('fruit');
    for(var i = 0; i < fruit.length; i++){
        if(fruit[i].getAttribute('type') === 'radio') {
            fruit[i].checked = false;
        }
    }

    var size = document.getElementsByName('size');
    for(var i = 0; i < size.length; i++){
        if(size[i].getAttribute('type') === 'radio') {
            size[i].checked = false;
        }
    }

    var place = document.getElementsByName('place');
    for(var i = 0; i < place.length; i++){
        if(place[i].getAttribute('type') === 'radio') {
            place[i].checked = false;
        }
    }
    var place = document.getElementsByClassName('check');
    place[3].style.display = 'none';

    var letter = document.getElementsByName('letter');
    for(var i = 0; i < letter.length; i++){
        if(letter[i].getAttribute('type') === 'radio') {
            letter[i].checked = false;
        }
    }
    var text = document.getElementById('text');
    text.style.display = 'none';

}

function save(){
    var sheet_check = $('input:radio[id=vanila]').is(':checked') || $('input:radio[id=choco]').is(':checked');
    var size_check = $('input:radio[id=middle]').is(':checked') || $('input:radio[id=large]').is(':checked');
    var f_check = $('input:radio[id=fruit_y]').is(':checked') || $('input:radio[id=fruit_n]').is(':checked');
    var l_check = $('input:radio[id=letter_y]').is(':checked') || $('input:radio[id=letter_n]').is(':checked');
    
    // id out으로 바꿔서 적용하기
    var custom = $('input:radio[id=out]').is(':checked') || $('input:radio[id=both]').is(':checked')

    if(sheet_check == true && size_check == true && f_check == true && l_check == true){
        $("input:radio").attr("disabled", true); 
        alert('Successfully Saved.');

        if(custom == true){
            $('.fruits').fadeIn();
        }
    }
    else{
        alert('There are unchecked items.');
    }
    
}


var img_L = 0;
var img_T = 0;
var targetObj;
        
function getLeft(o){
    return parseInt(o.style.left.replace('px', ''));
}
    
function getTop(o){
    return parseInt(o.style.top.replace('px', ''));
}
        
        // 이미지 움직이기
function moveDrag(e){

    var e_obj = window.event? window.event : e;
    var dmvx = parseInt(e_obj.clientX + img_L);
    var dmvy = parseInt(e_obj.clientY + img_T);

    targetObj.style.left = dmvx +"px";
    targetObj.style.top = dmvy +"px";

    return false;
}
        
        // 드래그 시작
function startDrag(e, obj){

    targetObj = obj;
    var e_obj = window.event? window.event : e;

    img_L = getLeft(obj) - e_obj.clientX;
    img_T = getTop(obj) - e_obj.clientY;
        
    document.onmousemove = moveDrag;
    document.onmouseup = stopDrag;

    if(e_obj.preventDefault)e_obj.preventDefault(); 

}
        
        // 드래그 멈추기
function stopDrag(){
    document.onmousemove = null;
    document.onmouseup = null;
}



function CreateImage(ImgName){

    var img = document.createElement('img'); // 이미지 객체 생성

    img.src = '../../static/src/' + ImgName + '.png'; // 이미지 경로 설정

    img.style.cursor = 'pointer'; // 커서 지정

    //style 지정
    img.style.position = 'absolute';
    img.style.left = '0px';
    img.style.top = '50px';
    img.style.cursor = 'hand';
    img.style.width = '50px';

    //해당 위치에 img 추가
    document.getElementById(ImgName).appendChild(img); 

    // img.onmousedown = startDrag(event, this);
}

function Start() {

    var $start = $('#middleArea');
    $('#start').fadeOut();
    $('h1').animate({marginTop:'-=200px'}, 1000);

    $start.fadeIn();
    $start.css('display', 'flex');
}

function submit() {
    alert('Your order has been submitted.');
    alert('... Moving to MYPAGE ...');
    location.href = '../../templates/custom.html'
}