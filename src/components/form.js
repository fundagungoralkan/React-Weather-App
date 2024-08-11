import {useState} from "react";
import axios from "axios";

export default function Form({setInfo}) {

const[city,setCity] = useState("");





const handleChange = () => {
    const api = "a05111fbb42dec53624eeb301218204a";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=tr&appid=${api}&units=metric`;

    axios(baseURL).then(res => setInfo(res.data));
}


return(
<div>
<h1>Hava Durumu</h1>
<form onSubmit={(e) => {e.preventDefault(); handleChange()}}>
<div className="form">
    <input value={city} onChange={(e) => setCity(e.target.value)}  className="inputText" type="text" placeholder="Şehri Giriniz" />
</div>

<div className="btnDiv">
<button type="submit" className="btn">
Verileri Getir
</button>
</div>
</form>









</div>

)






}