function leftTimer(year,month,day,hour,minute,second){
    var leftTime = (new Date(year,month-1,day,hour,minute,second)) - (new Date());
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //caculate the day
    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //caculate the hour
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//caculate the min
    var seconds = parseInt(leftTime / 1000 % 60, 10);//caculate the seconds
    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    setInterval("leftTimer(2018,5,21,0,0,0)",1000);
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML =minutes;
    document.getElementById("second").innerHTML =seconds;
    checkDST();
}
function checkTime(i){ //if time is less than 10 add 0
    if(i<10) {
        i = "0" + i;
    }
    return i;
}
