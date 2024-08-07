import {useEffect,useState} from "react";


export default function Form() {

const[city,setCity] = useState("");
useEffect(
    () => console.log(city),[city]
)



const handleChange = () => {
    
}


return(
<div>
<h1>Hava Durumu</h1>
<form onSubmit={(e) => {e.preventDefault(); handleChange()}}>
<div className="form">
    <input  onChange={(e) => setCity(e.target.value)}  className="inputText" type="text" placeholder="Şehri Giriniz" />
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