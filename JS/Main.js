"use strict";
var _sayilar=document.getElementsByTagName("button"),_sayiUzunluk=_sayilar.length,i=0;
for (i=0 ; i<_sayiUzunluk ; i++){
    _sayilar[i].onclick=hesapla;
}




"use strict";
var _sonuc= document.getElementById("sonuc");
function hesapla(){
    var _deger =this.innerHTML;
    if(_deger=="="){
        try{
            _sonuc.value=eval(_sonuc.value);
        }catch(e){
            _sonuc.value=0;
        }
        return;
    }
   
    _sonuc.value+=_deger;
}



"use strict";
var _delete=document.getElementById("Delete");
var _sonuc= document.getElementById("sonuc");
_delete.addEventListener("click", Sil);

    function Sil() {
        console.log("Sil fonksiyonu çağrıldı");
    _sonuc.value = "";
    }





