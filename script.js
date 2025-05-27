var h1 = document.getElementsByTagName('h1');
var p = document.getElementsByTagName("p");

function time(){
    
    var date;
    var seconds;
    var minutes;
    var hours;
    var num = 4;
    
    var set = setInterval(function(){
         date = new Date();
         seconds = date.getSeconds();
         minutes = date.getMinutes();
         hours = date.getHours();
         var M = document.getElementById("M");
        h1[1].innerHTML ="<b id='b3'>"+hours+"</b>"+ " : "+ "<b id='b2'>"+minutes+"</b>"+ " : "+ "<b id='b'>"+seconds+"</b>";
         if (hours <= 24 ){
              M.innerHTML = "PM";
         } else if(hours < 12) {
              M.innerHTML = "AM";
         } else {
              M.innerHTML = "AM";
         }
         p[0].innerHTML = seconds;
    },0.1);
     p[0].innerHTML = num;
}
time();
var sp = document.getElementById("sp");
var body = document.querySelector("body");
var color = document.getElementById("co");
color.addEventListener("change", () => {
     sp.innerHTML = color.value;
     body.style.background = color.value;
});

