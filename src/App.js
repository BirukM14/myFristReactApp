import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date(2024,4,4,23);
  const currentTime =date.getHours;
  const name = "biruk";
  const heading={
    color:"red",
    fontSize:"20px",
    border:"1px solid black",
  }
  const CustomStyle ={
    color :""
  }
  let greeting ="" ;
  if (currentTime < 12){
    greeting= "Good moring";
    
  }else if (currentTime < 18){
    greeting="good afternoon"
  }else greeting = "good eveninig";
  CustomStyle.color="red";
  
  
  
  
  return (
  <div>
     <h1 style={heading} >{greeting}</h1>
     
   <ul>html </ul>
   <ul>css</ul>
   <ul>javascript</ul>
   {greeting}
   </div>
  );
}


export default App;
