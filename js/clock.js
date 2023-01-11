let name = prompt("Adinizi Giriniz:");
let myName = document.querySelector('#myName');
myName.innerHTML= name;


// setInterval(onload, 1000);
setInterval(function(){
let tarih = new Date();
let gun = tarih.getDay()
let gunler = new Array("Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi")
let saat = tarih.getHours()+ ':' + tarih.getMinutes()+':'+tarih.getSeconds();
document.getElementById("myClock").innerHTML = saat + ' ' + gunler[gun];
// clearTimeout(saat);
},1000);