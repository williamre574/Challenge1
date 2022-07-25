
import reactLogo from './assets/react.svg'
import './App.css'
import  Cards  from "./Tarjeta/Card.jsx";
import react, {useState} from "react";
import Pages from './pages.jsx'



function App() {
  

  const[ActualPage, setActualPage] = useState(1);

  
   



  return (
    <div className="App">
      <Cards />
      <footer>
      <Pages page={ActualPage} total={4} onChange={(page) => {
         setActualPage(page);
      
      
      }} />
      </footer>
    </div>

  )
}

export default App
