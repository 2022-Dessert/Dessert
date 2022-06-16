// 구글 차트
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawLineChart);

function drawPieChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Apple Tart', 1],
        ['Carrot Cake', 1],
        ['Blueberry yogurt cake', 2],
        ['Chocolate Tart', 2],
        ['etc', 0.5]
    ]);

    var options = {
        legend: 'none',
        pieSliceText: 'label',
        title: 'The Best-Selling Dessert (100 degree rotation)',
        pieStartAngle: 100,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}

function drawLineChart() {
    var data = google.visualization.arrayToDataTable([
        ['Month', '2020', '2021'],
        ['Januaryr',  1000,  400],
        ['February',  1170,  460],
        ['March',  660,   1120],
        ['April',  860,   1000],
        ['May',  710,   940],
        ['June',  450,   1200],
        ['July',  310,   1280],
        ['August',  210,   1390],
        ['September',  380,  1450],
        ['October',  140,   1120],
        ['November',  410,   1260],
        ['December',  550,   1070]
    ]);

    var options = {
        title: 'Debon Sales Trend',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
}

// 구글 맵
function myMap() {
    var mapCanvas = document.getElementById("map");
    var myBranch = new google.maps.LatLng(36.62562562929032, 127.4544339960763);
    var myBranch2 = new google.maps.LatLng(36.35140931188943, 127.38319033673699);  // 대전 하레하레
    var myBranch3 = new google.maps.LatLng(37.767702542117526, 128.8762490729432);  // 강릉 돌체테리아
    var myBranch4 = new google.maps.LatLng(37.00837754278176, 127.10671118151004);  // 평택 수제 빵 연구소

    var mapOptions = {
        center: myBranch,
        zoom: 7
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: myBranch,
        map: map
    });
    var marker2 = new google.maps.Marker({
        position: myBranch2,
        map: map
    });
    var marker3 = new google.maps.Marker({
        position: myBranch3,
        map: map
    });
    var marker4 = new google.maps.Marker({
        position: myBranch4,
        map: map
    });

    var infoWindow = new google.maps.InfoWindow({
        content:
            "<h4> 청주 본점</h4>" +
            "<p> 충북대학교 전자정보 3관 </p>"
    });
    // Add a click listener to open the info window when the marker is clicked.
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
    var infoWindow2 = new google.maps.InfoWindow({
        content:
            "<h4> 대전 분점 </h4>" +
            "<p> 하레하레 </p>"
    });
    // Add a click listener to open the info window when the marker is clicked.
    marker2.addListener('click', function() {
        infoWindow2.open(map, marker2);
    });
    var infoWindow3 = new google.maps.InfoWindow({
        content:
            "<h4> 강릉 분점 </h4>" +
            "<p> 돌체테리아 </p>"
    });
    // Add a click listener to open the info window when the marker is clicked.
    marker3.addListener('click', function() {
        infoWindow3.open(map, marker3);
    });
    var infoWindow4 = new google.maps.InfoWindow({
        content:
            "<h4> 평택 분점 </h4>" +
            "<p> 수제 빵 전문점 </p>"
    });
    // Add a click listener to open the info window when the marker is clicked.
    marker4.addListener('click', function() {
        infoWindow4.open(map, marker4);
    });
}
