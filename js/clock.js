let name = prompt("Adinizi Giriniz:");
let myName = document.querySelector('#myName');
myName.innerHTML= name;


// setInterval(onload, 1000);
setInterval(function saatiGoster(){
let tarih = new Date();
let gun = tarih.getDay();
let gunler = new Array("Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi");
let saat = tarih.getHours(); //+ ':' + tarih.getMinutes()+':'+tarih.getSeconds();
let dakika = tarih.getMinutes();
let saniye = tarih.getSeconds();
saat =ciftsifir(saat);
dakika = ciftsifir(dakika);
saniye=ciftsifir(saniye);
document.getElementById("myClock").innerHTML = saat + ":" +dakika +":"+ saniye + ' ' + gunler[gun];
// clearTimeout(saat);
},1000);
function ciftsifir(deger){
    if(deger<10){
        deger="0"+deger;
    }
    return deger;
}
window.onload=saatiGoster;