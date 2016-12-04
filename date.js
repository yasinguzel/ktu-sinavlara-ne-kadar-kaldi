var vizeTarih = new Date("2016-11-12");
var finalTarih = new Date("2017-1-2");
var butTarih = new Date("2017-1-23");
var bugunTarih = new Date();

var vizelereKalanGun = aradakiGunBul(vizeTarih,bugunTarih);
var finallereKalanGun = aradakiGunBul(finalTarih,bugunTarih);
var butlereKalanGun = aradakiGunBul(butTarih,bugunTarih);


if (bugunTarih < vizeTarih){
    document.getElementById('vizeTablo').style.display = 'table-row';
    document.getElementById('finalTablo').style.display = 'table-row';
    document.getElementById('butTablo').style.display = 'table-row';

    document.getElementById('vize').innerHTML = vizelereKalanGun+" gün";
    document.getElementById('final').innerHTML = finallereKalanGun+" gün";
    document.getElementById('but').innerHTML = butlereKalanGun+" gün";
}
else if (bugunTarih < finalTarih){
    document.getElementById('finalTablo').style.display = 'table-row';
    document.getElementById('butTablo').style.display = 'table-row';

    document.getElementById('final').innerHTML = finallereKalanGun+" gün";
    document.getElementById('but').innerHTML = butlereKalanGun+" gün";
}
else{
    document.getElementById('butTablo').style.display='table-row';

    document.getElementById('but').innerHTML = butlereKalanGun+" gün";
}

function aradakiGunBul(tarih1,tarih2){
    var oneDay = 24*60*60*1000;
    return Math.round(Math.abs((tarih1.getTime() - tarih2.getTime())/(oneDay)));
}