var b1 = document.querySelector("#b1");
var p1 = document.getElementById("p1");
var inp = document.getElementById("in1")

b1.innerText = p1.innerText + "<i>Gett...</i>"+p1.textContent;
var cret = p1.style.color;

var num;
inp.addEventListener("input", ()=>{
    num = inp.value.toLowerCase();
    p1.textContent = inp.value.toUpperCase();
})

var sh = document.getElementsByTagName("button");
sh[0].onclick = () => {
    switch(cret){
        case "red" :
        alert("heyyyy")
        break;
        case "none" :
        alert("Yaaaaa")
        break;
    }
};
var element = document.getElementById("h1").parentNode;
var demo = document.getElementById("demo");
var spa = document.getElementById("spa")
demo.innerHTML = element.nodeName;
spa.parentNode.removeChild(spa)
