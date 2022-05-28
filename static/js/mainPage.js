$(function(){
    $(document).ready(function(){
        $('.title').slideDown(1200);
    });
});

function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(36.62562562929032, 127.4544339960763);

    var mapOptions = {
        center: myCenter,
        zoom: 18
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: myCenter,
        map: map
    });
}

function zoomIn(event) {
    event.target.style.transform = "scale(1.2)"; //1.2배 확대
    event.target.style.zIndex = 1;
    event.target.style.transition = "all 0.5s";// 속도
    let dv = event.currentTarget;
    dv.querySelector(".inner_box").style.display = 'block';
}

function zoomOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.5s";
    let dv = event.currentTarget;
    dv.querySelector(".inner_box").style.display = 'none';
}
