import { useState } from 'react';
import Form from './components/form';
import  {Info} from './components/info';
import './components/style.css'


function App() {
  const [info,setInfo] = useState([]);
  
  return (
    <div>
    <Form  setInfo = {setInfo} />
    <Info info = {info} />
    </div>
  );
}

export default App;
