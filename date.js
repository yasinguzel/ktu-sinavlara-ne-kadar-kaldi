var vizeTarih = new Date("2016-11-12");
var finalTarih = new Date("2017-1-2");
var butTarih = new Date("2017-1-23");
var bugunTarih = new Date();

var vizelereKalanGun = aradakiGunBul(vizeTarih,bugunTarih);
var finallereKalanGun = aradakiGunBul(finalTarih,bugunTarih);
var butlereKalanGun = aradakiGunBul(butTarih,bugunTarih);


if (bugunTarih < vizeTarih){
    document.getElementById("vize").style.display = 'block';
    document.getElementById("final").style.display = 'block';
    document.getElementById("but").style.display = 'block';

    document.getElementById('vize').innerHTML = "vizelere kalan süre: "+vizelereKalanGun+" gün";
    document.getElementById('final').innerHTML = "Finallere kalan süre: "+finallereKalanGun+" gün";
    document.getElementById('but').innerHTML = "Butlere kalan süre: "+butlereKalanGun+" gün";
}
else if (bugunTarih < finalTarih){
    document.getElementById("#final").style.display = 'block';
    document.getElementById("#but").style.display = 'block';

    document.getElementById('final').innerHTML = "Finallere kalan süre: "+finallereKalanGun+" gün";
    document.getElementById('but').innerHTML = "Bütlere kalan süre: "+butlereKalanGun+" gün";
}
else{
    document.getElementById('but').style.display='block';

    document.getElementById('but').innerHTML = "Bütlere kalan süre: "+butlereKalanGun+" gün";
}

function aradakiGunBul(tarih1,tarih2){
    var oneDay = 24*60*60*1000;
    return Math.round(Math.abs((tarih1.getTime() - tarih2.getTime())/(oneDay)));
}