$(function(){
    $('body').css('backgroundColor','#F9F8EA');
});

function check_all(){
    const checkbox = document.getElementById('all');
    var check = document.getElementsByClassName('check');

    const is_checked = checkbox.checked;

    if(is_checked === true){
        for(var i = 0; i < check.length; i++){
            check[i].checked = true;
        }
    }
    else {
        for(var i = 0; i < check.length; i++){
            check[i].checked = false;
        }
    }


}

function Count(type) {
    const result = document.getElementById('amount');
    const cost = document.getElementsByClassName('total');
    const total2 = document.getElementById('total');

    var num = result.innerText;
    var total = 30;

    if (type === 'plus'){
        num = parseInt(num) + 1;
    }
    else if(type === 'minus'){
        num = parseInt(num) - 1;
    }

    total = total * num;

    for(var i = 0; i < cost.length; i++){
        cost[i].innerHTML = total;
    }

    total2.innerHTML = total + 3;
    result.innerHTML = num;
}

function buy(){
    
    const quantity = document.getElementById('amount');
    var amount = quantity.innerHTML;
    var cost = document.getElementsByClassName('total');
    var total = parseInt(cost[0].innerText) + 3;

    alert("Ordered Product: Custom Cake " + amount +"\nTotal: " + total +',000 ₩' );
    location.href = '../../templates/Deliver.html'
}