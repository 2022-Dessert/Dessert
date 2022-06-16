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

    var infoWindow = new google.maps.InfoWindow({
        content:
            "<p> 충북대학교 전자정보 3관 </p>"
    });
    // Add a click listener to open the info window when the marker is clicked.
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
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

$(document).ready(function(){
    $(".image-frame").mouseenter(function(){
        $(".image-caption", this).slideDown("slow");
    });
    $(".image-frame").mouseleave(function(){
        $(".image-caption, this").slideUp("slow");
    });
});

function pageMove(){
    location.href = './../../Dessert/templates/brand.html';
}

/* Demo purposes only */
$(".hover").mouseleave(
    function() {
        $(this).removeClass("hover");
    }
);

google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Resource');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([
        ['task1', 'Requirements Analysis', 'spring',
            new Date(2022, 4, 23), new Date(2022, 4, 30), null, 100, null],
        ['task2', 'UI and functional refinement', 'summer',
            new Date(2022, 5, 1), new Date(2022, 5, 8), null, 100, null],
        ['task3', 'UI Design', 'autumn',
            new Date(2022, 5, 9), new Date(2022, 5, 20), null, 100, null],
        ['task4', 'Mainpage development', 'winter',
            new Date(2022, 5, 21), new Date(2022, 5, 31), null, 100, null],
        ['task5', 'Newspage development', 'spring',
            new Date(2022, 5, 21), new Date(2022, 5, 31), null, 100, null],
        ['task6', 'Login & Signup page development', 'summer',
            new Date(2022, 5, 21), new Date(2022, 5, 31), null, 100, null],
        ['task7', 'menu & brand page development', 'autumn',
            new Date(2022, 6, 1), new Date(2022, 6, 12), null, 100, null],
        ['task8', 'custom page development', 'winter',
            new Date(2022, 6, 1), new Date(2022, 6, 12), null, 100, null],
        ['task9', 'franchise page development', 'sports',
            new Date(2022, 6, 1), new Date(2022, 6, 12), null, 80, null],
        ['task10', 'Finalize projects and create ppts', 'sports',
            new Date(2022, 6, 13), new Date(2022, 6, 17), null, 100, null],
    ]);

    var options = {
        height: 400,
        gantt: {
            trackHeight: 30
        }
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

    chart.draw(data, options);
}