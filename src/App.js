import { useState } from 'react';
import Form from './components/form';
import  {Info} from './components/info';

function App() {
  const [info,setInfo] = useState([]);
  return (
    <div>
    <Form  info = {info}  setInfo = {setInfo} />
    <Info info = {info} />
    </div>
  );
}

export default App;
