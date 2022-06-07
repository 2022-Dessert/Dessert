$(document).ready(function(){

    var place = document.getElementsByClassName('check');
    place[2].style.display = 'none';
   
    $('#fruit_y').click(function(){
        place[2].style.display = 'block';
    });

    $('#fruit_n').click(function(){
        place[2].style.display = 'none';
    });


    var text = document.getElementById('text');
    text.style.display = 'none';

    $('#letter_y').click(function(){
        text.style.display = 'block';
    });

    $('#letter_n').click(function(){
        text.style.display = 'none';
    });
   
});

function reset(){

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

    var place = document.getElementsByName('place');
    for(var i = 0; i < place.length; i++){
        if(place[i].getAttribute('type') === 'radio') {
            place[i].checked = false;
        }
    }
    var place = document.getElementsByClassName('check');
    place[2].style.display = 'none';

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
    var s_check = $('input:radio[id=vanila]').is(':checked') || $('input:radio[id=choco]').is(':checked');
    var f_check = $('input:radio[id=fruit_y]').is(':checked') || $('input:radio[id=fruit_n]').is(':checked');
    var l_check = $('input:radio[id=letter_y]').is(':checked') || $('input:radio[id=letter_n]').is(':checked');

    if(s_check == true && f_check == true && l_check == true){
        $("input:radio").attr("disabled", true); 
        alert('저장이 완료되었습니다.');
    }
    else{
        alert('체크하지 않은 항목이 있습니다.');
    }
    
}


$(document).ready(function () {
    var $container = $(".container");
    var $banner_img = $(".container img");
    var img_left = 0;
    var img_top = 0;
    var mouse_state = false;

    $banner_img.each(function () {
        img_left = Math.random() * ($container.width() - $(this).width());
        img_top = Math.random() * ($container.height() - $(this).width());
        $(this).css({
            left: img_left,
            top: img_top
        });
    });

    $banner_img.mousedown(function (e) {
        var container_x = $container.offset().left;
        var container_y = $container.offset().top;
        $(this).css({
            left: e.clientX - container_x - ($banner_img.width()/2),
            top: e.clientY - container_y -($banner_img.height()/2)
        });
        mouse_state = true;
    });

    $banner_img.mousemove(function(e){
        var container_x = $container.offset().left;
        var container_y = $container.offset().top;

        if(mouse_state == true){
            $(this).css({
            left: e.clientX - container_x - ($banner_img.width()/2),
            top: e.clientY - container_y -($banner_img.height()/2)
        });
        }
    });

    $banner_img.mouseup(function(e){
        mouse_state = false;
    });
});