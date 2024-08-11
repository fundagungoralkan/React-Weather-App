import { WiSunset } from 'react-icons/wi';


function Info({info}) {


   if (!info || !info.main || !info.weather) {
      return <div></div>; // Veri yükleniyorken bir yükleniyor mesajı gösterilebilir.
  }



return (
<div className="info">
    <p id="sehir">{info.name}</p>
    <div className="genelDeger">
  <p id="sicaklik">{info.main.temp}</p><WiSunset className="fa-c"/>
 </div>
 <p id="havaDurumu">{info.weather[0].description}</p>
 <div className="his">
    <p id="hissedilen">{info.main.feels_like}</p><WiSunset className="fa-c"/>
 </div>
</div>

)

}

export {Info};